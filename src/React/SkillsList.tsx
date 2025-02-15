import React, { useState } from 'react';

const CategoryIcons = {
  'Web Development': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'><path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path></svg>
  ),
  'สื่อออนไลน์ / สื่อสิ่งพิมพ์': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="#000000" className='w-6 h-6 text-[var(--sec)] opacity-70'>
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M899.984 19.873h-3.452c-26.123 0-47.296 21.172-47.296 47.296v888.508c0 26.127 21.173 47.298 47.296 47.298h3.452c26.119 0 47.297-21.171 47.297-47.298V67.169c0-26.124-21.177-47.296-47.297-47.296z" fill="#4A5699"></path><path d="M132.643 19.873h-3.449c-26.12 0-47.296 21.172-47.296 47.296v888.508c0 26.127 21.177 47.298 47.296 47.298h3.449c26.123 0 47.299-21.171 47.299-47.298V67.169c0-26.124-21.176-47.296-47.299-47.296z" fill="#C45FA0"></path><path d="M899.463 19.873H129.194c-26.12 0-47.296 21.172-47.296 47.296v3.377c0 26.12 21.177 47.299 47.296 47.299h770.269c26.123 0 47.296-21.179 47.296-47.299v-3.377c0-26.124-21.173-47.296-47.296-47.296z" fill="#6277BA"></path><path d="M899.463 905.006H129.194c-26.12 0-47.296 21.17-47.296 47.29v3.381c0 26.127 21.177 47.298 47.296 47.298h770.269c26.123 0 47.296-21.171 47.296-47.298v-3.381c0-26.12-21.173-47.29-47.296-47.29z" fill="#C45FA0"></path><path d="M717.962 543.153H542.047c-26.121 0-47.298 21.175-47.298 47.297v3.724c0 26.123 21.177 47.293 47.298 47.293h175.915c26.121 0 47.297-21.17 47.297-47.293v-3.724c0-26.122-21.176-47.297-47.297-47.297z" fill="#E5594F"></path><path d="M689.268 198.849H513.355c-26.122 0-47.298 21.175-47.298 47.297v3.722c0 26.12 21.176 47.297 47.298 47.297h175.912c26.122 0 47.298-21.177 47.298-47.297v-3.722c0-26.122-21.175-47.297-47.297-47.297z" fill="#F0D043"></path><path d="M757.789 353.081H261.17c-26.121 0-47.297 21.172-47.297 47.296v3.377c0 26.121 21.177 47.299 47.297 47.299h496.619c26.121 0 47.296-21.178 47.296-47.299v-3.377c0-26.125-21.175-47.296-47.296-47.296z" fill="#E5594F"></path><path d="M762.638 726.225h-496.62c-26.12 0-47.294 21.18-47.294 47.301v3.377c0 26.12 21.174 47.3 47.294 47.3h496.62c26.122 0 47.296-21.18 47.296-47.3v-3.377c0-26.122-21.174-47.301-47.296-47.301z" fill="#6277BA"></path><path d="M355.734 543.328H281.41c-26.122 0-47.297 21.17-47.297 47.293v3.378c0 26.118 21.175 47.297 47.297 47.297h74.324c26.123 0 47.296-21.179 47.296-47.297v-3.378c0-26.123-21.174-47.293-47.296-47.293z" fill="#F39A2B"></path><path d="M334.85 248.006m-48.986 0a48.986 48.986 0 1 0 97.972 0 48.986 48.986 0 1 0-97.972 0Z" fill="#F39A2B"></path></g></svg>
  ),
  'เสื้อผ้า หมวกและแพทเทิร์น': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="#000000" className='w-6 h-6 text-[var(--sec)] opacity-70'><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M964.751 210.302H61.963c-25.57 0-46.296 20.727-46.296 46.296v6.518c0 25.57 20.727 46.297 46.296 46.297h902.788c25.569 0 46.297-20.727 46.297-46.297v-6.518c0-25.57-20.728-46.296-46.297-46.296z"
          fill="#4A5699"></path>
        <path
          d="M964.751 828.887H61.963c-25.57 0-46.296 20.728-46.296 46.297v6.52c0 25.565 20.727 46.297 46.296 46.297h902.788c25.569 0 46.297-20.731 46.297-46.297v-6.52c0-25.57-20.728-46.297-46.297-46.297z"
          fill="#C45FA0"></path>
        <path
          d="M68.564 210.302h-6.601c-25.57 0-46.296 20.727-46.296 46.296v625.105c0 25.565 20.727 46.297 46.296 46.297h6.601c25.571 0 46.296-20.731 46.296-46.297V256.598c0-25.57-20.725-46.296-46.296-46.296zM964.751 210.302h-6.604c-25.569 0-46.292 20.727-46.292 46.296v625.105c0 25.565 20.723 46.297 46.292 46.297h6.604c25.569 0 46.297-20.731 46.297-46.297V256.598c0-25.57-20.728-46.296-46.297-46.296z"
          fill="#6277BA"></path>
        <path d="M155.907 396.561a49.6 49.555 0 1 0 99.2 0 49.6 49.555 0 1 0-99.2 0Z" fill="#F0D043"></path>
        <path
          d="M739.108 111.191H284.412c-25.567 0-46.296 20.727-46.296 46.296v6.518c0 25.568 20.729 46.297 46.296 46.297h454.696c25.569 0 46.293-20.729 46.293-46.297v-6.518c0-25.569-20.723-46.296-46.293-46.296z"
          fill="#F39A2B"></path>
        <path
          d="M607.586 569.65c0.037 55.423-41.429 99.896-95.959 102.036-55.394 2.173-99.965-43.03-102.043-95.958-1.141-29.074-23.423-53.393-53.392-53.393-28.241 0-54.535 24.293-53.392 53.393 4.438 113.048 94.812 202.82 208.826 202.742 113.141-0.08 202.821-98.092 202.742-208.82-0.049-68.858-106.832-68.862-106.782 0z"
          fill="#F39A2B"></path>
        <path
          d="M411.073 564.357c1.049-54.399 44.634-97.98 99.036-99.029 54.426-1.049 98.01 46.207 99.028 99.029 1.326 68.771 108.109 68.9 106.783 0-2.19-113.543-92.271-203.625-205.812-205.813-113.539-2.188-203.694 95.569-205.819 205.813-1.328 68.901 105.458 68.771 106.784 0z"
          fill="#E5594F"></path>
      </g></svg>
  )
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    'Web Development': [
      'เว็บไซต์ระบบสมาชิกส่งภาพหลักฐานโอนเงิน',
      'Landing pages',
      'Portfolio websites',
    ],
    'สื่อออนไลน์ / สื่อสิ่งพิมพ์': [
      'แอดมินดูเพจโซเชียล',
      'ดูแลจัดการไลฟ์สด',
      'ดูแลร้านค้าออนไลน์ Lazada Shopee Line Tiktok',
      'ตัดต่อวิดีโอโฆษณาทีวีและโซเชียล',
      'ออกแบบภาพแบนเนอร์โฆษณาสินค้า',
      'บรรจุภัณฑ์สินค้า / ฉลากสินค้า',
      'หนังสือ E-book',
    ],
    'เสื้อผ้า หมวกและแพทเทิร์น': [
      'ออกแบบลายเสื้อ',
      'ปฏิบัติใช้งานดูแลเครื่องสกรีนเสื้อ และรับงานจากลูกค้าได้ดี',
      'สร้างแพทเทิร์นหมวกด้วย RP-DGS',
      'ถ่ายภาพแฟชั่นและจัดทำแบนเนอร์โฆษณา',
      'การขายสินค้าในเอเชียด้วย Pinkoi',
    ]
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">ทำอะไรได้บ้าง ?</h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${openItem === category ? 'rotate-180' : ''
                      }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${openItem === category ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className='pl-1'>•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;