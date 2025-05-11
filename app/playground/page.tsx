'use client'

import React, { useState } from 'react';

const PlaygroundPage: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [language, setLanguage] = useState<string>('javascript');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const languages = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'C++', value: 'cpp' },
    { label: 'Java', value: 'java' },
  ];

  const runCode = () => {
    if (code.trim() === '') {
      setOutput('Please enter some code to run.');
      return;
    }
    setOutput(`Running ${language} code...\n\nOutput:\nHello, World!`);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} max-w-5xl mx-auto p-6 rounded-lg`}>
      <h1 className="text-4xl font-bold mb-6 text-center">Interactive Code Runner</h1>
      <div className="mb-4 flex justify-between items-center">
        <label htmlFor="language" className="block mb-2 font-semibold">Select Language:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={`${darkMode ? 'bg-gray-800 text-gray-100 border-gray-700' : 'bg-white text-gray-900 border-gray-300'} border rounded px-3 py-2 max-w-xs`}
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>{lang.label}</option>
          ))}
        </select>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <textarea
        className={`${darkMode ? 'bg-gray-800 text-gray-100 border-gray-700' : 'bg-white text-gray-900 border-gray-300'} w-full h-48 p-3 rounded font-mono text-sm mb-4 border`}
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
      <pre className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'} mt-6 p-4 rounded whitespace-pre-wrap`}>{output}</pre>
    </div>
  );
};

export default PlaygroundPage;
