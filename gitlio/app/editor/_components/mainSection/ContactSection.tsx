'use client';
import { MdEmail } from 'react-icons/md';
import {
  SiTistory,
  SiVelog,
  SiGithub,
  SiInstagram,
  SiFacebook,
  SiKakao,
} from 'react-icons/si';
import ContactSidebarStore from '@/store/contactSidebarStore';

export default function ContactSection() {
  const { contactInfo } = ContactSidebarStore();

  return (
    <div className="bg-white w-[800px] flex flex-col flex-1 justify-start rounded-xl pb-5">
      <h1 className="text-3xl font-semibold ml-10 mr-5 pt-5">#Contact</h1>
      <div className="flex flex-col items-center h-full w-full mt-5">
        <div className="flex flex-col items-center w-fit mx-10 px-6 bg-neutral-content/30 rounded-3xl shadow-md">
          {contactInfo.name ? (
            <div className="text-lg font-semibold mt-6">{contactInfo.name}</div>
          ) : (
            <div className="font-bold text-zinc-300 mt-6 text-xl">
              insert your name
            </div>
          )}
          <div className="flex flex-wrap w-full justify-start justify-center items-center mt-6">
            <div className="flex w-[295px] justify-start items-center mb-6">
              <MdEmail className="text-xl mr-2" />
              <div className="flex justify-start items-center break-all text-sm max-w-[267px]">
                {contactInfo.email}
              </div>
            </div>
            {contactInfo.blogUrls.map((blog) => (
              <div
                key={blog.id}
                className="flex w-[295px] max-w-[295px] justify-start items-center mb-6"
              >
                {blog.faviconUrl ? (
                  <img
                    src={blog.faviconUrl}
                    alt="Blog Favicon"
                    className="w-5 h-5 mr-2 shrink-0"
                  />
                ) : (
                  ''
                )}
                <div className="flex justify-start items-center break-all text-sm max-w-[267px]">
                  {blog.url ? blog.url : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
