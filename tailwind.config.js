/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
      colors: {
        brand: {
          // 메인 컬러 (파란색 계열)
          primary: '#4A90E2',    // 메인 파란색
          light: '#7AB7F1',      // 밝은 파란색
          lighter: '#B8D6F7',    // 가장 밝은 파란색
          dark: '#2171C7',       // 진한 파란색
          darker: '#1A3B6C',     // 가장 진한 파란색 (네이비)
        },
        security: {
          // 보안 관련 컬러
          warning: '#FF9800',    // 주황색 경고
          danger: '#E53935',     // 빨간색 위험
          success: '#43A047',    // 초록색 성공
        }
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
} 