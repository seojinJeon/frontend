"use client";
import React, { useEffect, useState } from "react";
import ImageSelectionModal from "@/components/ImgSelectModal";

interface Data {
  url: string;
  images: string[];
  sentences: string[];
}

// 예시 데이터
const sampleData: Data[] = [
  {
    url: "www.naver.com",
    images: [
      "https://blog.kakaocdn.net/dn/CNxUY/btqw7dnElRU/HuVZgvpT6J8n4aEYFathEk/img.jpg",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
    ],
    sentences: ["네이버입니다 어쩌고", "두 번째 설명"],
  },
  {
    url: "www.daum.net",
    images: [
      "https://blog.kakaocdn.net/dn/yElzG/btqw7QZODLs/iA6TBn80hto4lndolDKB00/img.jpg",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
    ],
    sentences: ["다음입니다 어쩌고", "두 번째 설명"],
  },
  {
    url: "www.google.com",
    images: [
      "https://cdn-icons-png.flaticon.com/512/5968/5968863.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
      "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png",
    ],
    sentences: ["구글입니다 어쩌고", "두 번째 설명"],
  },
];

function Page() {
  const [repositoryUrls, setRepositoryUrls] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [selectedData, setSelectedData] = useState<Data | null>(null);
  const [selectedImage, setSelectedImage] = useState(
    "https://i.ibb.co/w7KCcXL/free-icon-example-5486150.png"
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // 로컬 스토리지에서 URL 목록 불러오기
  useEffect(() => {
    const loadedUrls = JSON.parse(
      localStorage.getItem("repositoryUrls") || "[]"
    );
    setRepositoryUrls(loadedUrls);
  }, []);

  // 선택된 URL에 해당하는 데이터 찾기
  useEffect(() => {
    const data = sampleData.find((data) => data.url === selectedUrl);
    setSelectedData(data ?? null); // data가 undefined일 경우 null을 할당
  }, [selectedUrl]);

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center w-full px-4 py-8">
      {" "}
      <div className="btn btn-ghost text-2xl">Your Project</div>
      <div>
        <select
          className="select select-bordered select-sm w-full max-w-xs"
          onChange={(e) => setSelectedUrl(e.target.value)}
        >
          <option disabled selected>
            선택되지 않음
          </option>
          {repositoryUrls.map((url) => (
            <option key={url} value={url}>
              {url}
            </option>
          ))}
        </select>
      </div>
      {selectedData && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">이미지:</h3>
          <img
            src={selectedImage}
            alt="기본 이미지"
            className="w-full h-auto cursor-pointer mt-4"
            onClick={() => setModalIsOpen(true)}
          />
          <ImageSelectionModal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            onSelect={handleImageSelect}
            images={selectedData.images}
          />
          <h3 className="text-lg font-semibold mt-4">문장:</h3>
          <div>
            {selectedData.sentences.map((sentence, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <input type="checkbox" className="checkbox " />
                <p>{sentence}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <button className="btn btn-info mt-8 mb-4">저장</button>
    </div>
  );
}

export default Page;
