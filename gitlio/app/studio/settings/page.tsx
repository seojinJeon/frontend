import Navbar from '@/components/studio/StdNavbar';
import Sidebar from '@/components/studio/StdSidebar';

export default function SettingPage() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-4">메인 컨텐츠 영역</main>
      </div>
    </div>
  );
}
