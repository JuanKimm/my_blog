// app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - 김주안의 인공지능 일기",
  description: "한신대학교 소프트웨어융합학부 학생의 소개 페이지입니다.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* 인사말 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-gray-600">
            인공지능의 무한한 가능성을 탐구합니다
          </p>
        </div>

        {/* 프로필 섹션 */}
        <section className="bg-white rounded-lg p-6 border border-indigo-200 shadow-md">
          <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            소속
          </h2>
          <p className="text-base text-gray-700">
            한신대학교 소프트웨어융합학부
          </p>
        </section>

        {/* 관심 분야 섹션 */}
        <section className="bg-white rounded-lg p-6 border border-indigo-200 shadow-md">
          <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            관심 분야
          </h2>
          <div className="text-base text-gray-700 space-y-3">
            <p>
              인공지능, 특히 자연어 처리와 컴퓨터 비전 분야에 깊은 관심을 가지고
              있습니다. 최신 AI 기술 트렌드를 학습하고 실제 프로젝트에 적용하는
              것을 좋아합니다.
            </p>
            <p>
              현재는 딥러닝 모델의 구조와 학습 방법에 대해 공부하고 있으며, 특히
              Transformer 아키텍처와 그 응용에 관심이 많습니다.
            </p>
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section className="bg-white rounded-lg p-6 border border-indigo-200 shadow-md">
          <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="text-base text-gray-700 space-y-2">
            <p className="flex items-center gap-2">
              <span>📧</span>
              <a
                href="rlawndksa03@hs.ac.kr"
                className="hover:text-indigo-500 transition-colors"
              >
                rlawndksa03@hs.ac.kr
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span>💻</span>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-colors"
              >
                github.com/
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
