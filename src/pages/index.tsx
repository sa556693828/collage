import Link from "next/link";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function Component() {
  const staffs = [
    "個人最新照片",
    "身分證明文件",
    "高中學歷證明或同等教育證明或在學證明",
    "高中在學三年成績單",
    "語文證明",
    "推薦信",
    "中或英文自傳(須包含個人成長背景、申請動機、讀書計畫等)",
  ];
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5] dark:bg-[#1A1A1A]">
        <div className="container px-6 md:px-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  實通外籍生大學申請
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  想體驗台灣的文化嗎？想接觸最新的科技嗎？我們提供一站式的服務，協助外籍生來台就讀大學，讓你輕鬆融入台灣的學術環境！
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#007AFF] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#0066D6] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#007AFF] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#F5F5F5] dark:text-[#1A1A1A] dark:hover:bg-[#E5E5E5] dark:focus-visible:ring-[#F5F5F5]"
                  href="#"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-[#D9D9D9] bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#F5F5F5] hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#007AFF] disabled:pointer-events-none disabled:opacity-50 dark:border-[#333333] dark:bg-[#1A1A1A] dark:hover:bg-[#333333] dark:hover:text-[#F5F5F5] dark:focus-visible:ring-[#F5F5F5]"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square border"
              height={550}
              src="/placeholder.svg"
              width={550}
            />
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-[#1A1A1A]"
        id="services"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#F5F5F5] px-3 py-1 text-sm dark:bg-[#333333]">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                How We Can Help
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Global Student Assist offers a wide range of services to support
                international students throughout their academic journey.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-bold">📚 多元學術環境</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      在台灣的大學，你將有機會接觸到世界一流的教育資源，選擇豐富多元的課程，發展個人興趣和專業領域。
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-bold">🌏 跨文化體驗</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      台灣融合了東方與西方的文化，讓你在求學過程中，不僅學術有成，更能體驗到不同文化的魅力，結交來自世界各地的朋友。
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-2xl font-bold">💼 專業申請指導</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      我們團隊提供完整的申請流程指導，從選校建議到文件準備，協助你順利完成入學申請。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last border"
              height={310}
              src="/placeholder.svg"
              width={550}
            />
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5] dark:bg-[#1A1A1A]"
        id="testimonials"
      >
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              申請資格
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              須符合外國學生來台就學辦法 International Students Undertaking
              Studies in Taiwan
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=H0110001"
                className="text-2xl underline underline-offset-4 text-blue-600 hover:text-blue-700"
              >
                外國學生來台就學辦法
              </a>
              <a
                href="https://law.moj.gov.tw/ENG/LawClass/LawAll.aspx?pcode=H0110001"
                className="text-2xl underline underline-offset-4 text-blue-600 hover:text-blue-700"
              >
                International Students Undertaking
              </a>
            </div>
          </div>
          {/* <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 shadow-md dark:bg-[#333333]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/avatars/01.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Jada Diaz
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      University of Toronto
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg font-semibold leading-snug">
                  “Global Student Assist made the entire university application
                  process so much easier. Their guidance was invaluable.”
                </blockquote>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md dark:bg-[#333333]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/avatars/02.png" />
                    <AvatarFallback>LM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Liam Moreno
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      University of Cambridge
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg font-semibold leading-snug">
                  “The team at Global Student Assist went above and beyond to
                  ensure I had everything I needed for my visa application.
                  Highly recommended!”
                </blockquote>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md dark:bg-[#333333]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/avatars/03.png" />
                    <AvatarFallback>ES</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Emilia Sanchez
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      University of Melbourne
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg font-semibold leading-snug">
                  “I couldn't have navigated the pre-departure process without
                  the support of Global Student Assist. They made my transition
                  to a new country so much smoother.”
                </blockquote>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-[#1A1A1A]"
        id="about"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#F5F5F5] px-3 py-1 text-sm dark:bg-[#333333]">
                About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                所需文件
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center py-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-2 py-4">
                {staffs.map((staff, index) => (
                  <li key={index}>
                    <IoCheckmarkDoneOutline
                      className="mr-4 inline-block size-10"
                      color="green"
                    />
                    <a className="text-2xl">{staff}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
