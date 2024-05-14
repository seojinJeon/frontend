// 'use client';
import React, { useState } from 'react';
import { CreateGPTProject } from '@/actions/creategpt';

interface GptAddModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GptAddModal: React.FC<GptAddModalProps> = ({ isOpen, onClose }) => {
  const [githubId, setGithubId] = useState<string>('');
  const [repoUrl, setRepoUrl] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await CreateGPTProject({ githubId, repoUrl });
      console.log('Project created:', result);
      onClose();
    } catch (error) {
      console.error('Failed to create project:', error);
      alert('프로젝트 생성에 실패했습니다.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">GPT 프로젝트 생성</h2>
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              GitHub ID:
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="GitHub ID"
              value={githubId}
              onChange={(e) => setGithubId(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              GitHub Repository URL:
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="GitHub Repository URL"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            생성
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptAddModal;
