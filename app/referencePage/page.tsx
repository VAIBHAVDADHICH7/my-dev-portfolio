'use client'

import React, { useState } from 'react';
import EducationSection from '../../components/EducationSection';

const ReferencePage: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [language, setLanguage] = useState<string>('javascript');

  const languages = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'C++', value: 'cpp' },
    { label: 'Java', value: 'java' },
  ];

  const runCode = () => {
    // Simulate code execution for demo purposes
    // In real app, integrate with backend or third-party API
    if (code.trim() === '') {
      setOutput('Please enter some code to run.');
      return;
    }
    setOutput(`Running ${language} code...\n\nOutput:\nHello, World!`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Interactive Code Runner</h1>
      <div className="mb-4">
        <label htmlFor="language" className="block mb-2 font-semibold">Select Language:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs"
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>{lang.label}</option>
          ))}
        </select>
      </div>
      <textarea
        className="w-full h-48 p-3 border border-gray-300 rounded font-mono text-sm mb-4"
        placeholder={`Write your ${language} code here...`}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        onClick={runCode}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
      >
        Run Code
      </button>
      <pre className="mt-6 p-4 bg-gray-100 rounded whitespace-pre-wrap">{output}</pre>

      {/* Education Section Integration */}
      <EducationSection />
    </div>
  );
};

export default ReferencePage;
