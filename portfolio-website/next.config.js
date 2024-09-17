/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // 필요한 설정을 추가
    unoptimized: true, // 이미지 최적화를 비활성화할 수 있습니다. 문제 해결에 도움될 수 있음.
  },
};

module.exports = nextConfig;
