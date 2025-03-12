"use client"
import { useState, useEffect, useContext } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import Templates from '@/app/(data)/templates';
import { TEMPLATE } from '../../_components/TemplateListSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModal';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/navigation';

interface PROPS {
  params: Promise<{ 'template-slug': string }>; // Make sure 'params' is a Promise
}

function CreateNewContent(props: PROPS) {
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [templateSlug, setTemplateSlug] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const router = useRouter();
  const { user } = useUser();

  const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);

  useEffect(() => {
    props.params.then((unwrappedParams) => {
      const slug = unwrappedParams['template-slug'];
      setTemplateSlug(slug);
      const template = Templates?.find((item) => item.slug === slug);
      setSelectedTemplate(template);
    });
  }, [props.params]);

  const GenerateAIContent = async (formData: any) => {

    if (totalUsage >= 100000) {
      alert("You have reached your usage limit. Please upgrade your plan to continue.");
      router.push('/dashboard/billing/')
      return;
    }
    

    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiprompt;

    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    try {
      const result = await chatSession.sendMessage(FinalAIPrompt);

      // Check if result is valid and has a response
      if (result && result.response) {
        const responseText = await result.response.text(); // Ensure response text is awaited properly
        setAiOutput(responseText); // Set AI output correctly
        await SaveInDb(formData, selectedTemplate?.slug, responseText);
      } else {
        console.error('Error: No response found in the result.');
        setAiOutput('Error: No response found.');
      }
    } catch (error) {
      console.error('Error during chat session:', error);
      setAiOutput('Error during chat session.');
    } finally {
      setLoading(false);
    }
  };

  // Save AI output and form data to the database
  const SaveInDb = async (formData: any, slug: string | undefined, aiResp: string) => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      console.error('User email is not available.');
      return;
    }

    try {
      const result = await db.insert(AIOutput).values({
        formData: JSON.stringify(formData), // Convert formData to string
        aiResponse: aiResp,
        templateSlug: slug || '',
        createdBy: user.primaryEmailAddress.emailAddress,
        createdAt: moment().format('DD/MM/YYYY'), // Ensure the format is a string
      });

      console.log('Data saved successfully:', result);
    } catch (error) {
      console.error('Error saving to database:', error);
    }
  };

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* FormSection */}
        <FormSection selectedTemplate={selectedTemplate} userFormInput={GenerateAIContent} loading={loading} />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
        {/* OutputSection */}
      </div>
    </div>
  );
}

export default CreateNewContent;
