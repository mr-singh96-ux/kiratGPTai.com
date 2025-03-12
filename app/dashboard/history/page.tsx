"use client";
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq, desc } from 'drizzle-orm';  // Add desc to handle sorting

const HistoryPage = () => {
  const { user } = useUser();
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!user?.primaryEmailAddress?.emailAddress) return;

      try {
        const results = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
          .orderBy(desc(AIOutput.createdAt)); // Correct way to use desc in drizzle-orm

        setHistory(results);
      } catch (error) {
        console.error('Error fetching history:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [user]);

  return (
    <div className="p-10 bg-gray-100">
      <div className='bg-white flex rounded-lg flex-col p-5'>
        <h1 className="text-2xl font-extrabold p-4">History</h1>
        <p className='text-l p-4 mt-[-20px]'>Search your previously generated AI content.</p>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="space-y-5">
            {history.length === 0 ? (
              <div>No history found.</div>
            ) : (
              history.map((entry, index) => (
                <div key={index} className="border p-4 rounded-lg shadow-sm ">
                  <div className="font-semibold flex justify-between">
                    Template: {entry.templateSlug}
                    <span>Word Count: {entry?.aiResponse ? entry.aiResponse.trim().split(/\s+/).length : 0}</span>
                  </div>
                  <div className="mt-2">{JSON.parse(entry.formData).description}</div>
                  <div className="mt-2">AI Response: {entry.aiResponse}</div>

                  <div className="mt-2 text-sm text-gray-500">Created At: {entry.createdAt}</div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
