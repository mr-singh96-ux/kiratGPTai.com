"use client";
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema'; // Ensure this is the correct schema definition
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState, useContext } from 'react';
import { eq } from 'drizzle-orm';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);
  const [error, setError] = useState<string | null>(null);
  const [isResetting, setIsResetting] = useState(false); // To prevent multiple resets happening simultaneously

  // This useEffect fetches data initially and updates total usage
  useEffect(() => {
    if (user) {
      GetData();
    }
  }, [user]);

  // This useEffect will trigger each time `updateCreditUsage` state changes
  useEffect(() => {
    if (user && updateCreditUsage) {
      GetData();
      setUpdateCreditUsage(false); // Reset updateCreditUsage to prevent infinite loop
    }
  }, [updateCreditUsage, user, setUpdateCreditUsage]);

  // Correcting the typing here. We use any type for the result to handle all potential cases
  const GetData = async () => {
    try {
      const result: any[] = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress || ""));
      
      GetTotalUsage(result); // Pass the result array of AIOutput
    } catch (err) {
      setError('Error fetching data. Please try again later.');
      console.error(err);
    }
  };

  // Updated typing of the result parameter
  const GetTotalUsage = (result: any[]) => {
    let total = 0;
    result.forEach((element: any) => { // Explicitly defining the element type as 'any'
      total += countWords(element.aiResponse); // Assuming `aiResponse` is a property of the result objects
    });
    setTotalUsage(total); // Updates the total usage immediately when new data is fetched
  };

  // Function to count words in the AI response
  const countWords = (text: string | undefined) => {
    if (!text) return 0;
    return text.split(/\s+/).length; // Correct regex to split by any whitespace
  };

  const handleReset = async () => {
    if (isResetting) return; // Prevent multiple clicks
    setIsResetting(true);

    try {
      // Ensure that the model is deleted properly based on the condition
      await db
        .delete(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress || ""));

      // Reset the total usage context
      setTotalUsage(0);
      setUpdateCreditUsage(true); // Trigger to reflect changes in credit usage
    } catch (err) {
      setError('Error resetting credits. Please try again later.');
      console.error(err);
    } finally {
      setIsResetting(false);
    }
  };

  const totalCredits = 100000;
  const usedCredits = totalUsage;
  const usagePercentage = (usedCredits / totalCredits) * 100;

  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: `${usagePercentage}%`,
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{`${usedCredits}/1,00,000 credits used`}</h2>
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>

      {usedCredits >= totalCredits ? (
        <div className="mt-4">
          <Button
            variant="secondary"
            className="w-full my-3 text-primary"
            onClick={handleReset}
            disabled={isResetting} // Disable the button while resetting
          >
            {isResetting ? 'Resetting...' : 'Reset Credits to 0'}
          </Button>
        </div>
      ) : (
        <Button variant={'secondary'} className="w-full my-3 text-primary">
          Upgrade
        </Button>
      )}
    </div>
  );
}

export default UsageTrack;
