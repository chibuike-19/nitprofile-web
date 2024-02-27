import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "../assets/nithub-logo.png";
const inter = Inter({ subsets: ["latin"] });
import ImageCarounsel from "@/component/imageCarousel";
import carouselImg1 from "../assets/DSC_0056-1024x680.jpg";
import carouselImg2 from "../assets/nit1.jpeg";
import carouselImg3 from "../assets/nit3.jpeg";
import carouselImg4 from "../assets/nit4.png";

export default function Home() {
  const data = [
    { img: carouselImg1, text: "The Best Wholesale distributor in Nigeria" },
    { img: carouselImg2, text: "You can do more with us on your side" },
    { img: carouselImg3, text: "Welcome to the world of no Limitations" },
    { img: carouselImg4, text: "Take that bold step today!" },
  ];
  return (
    <main>
      <div className="login-container">
        <div className="login-form">
          <div className="login-form-inner">
            <div className="logo">
              <Image src={Logo} alt="Nithub Logo" height={20} width={120} />{" "}
            </div>
            <h1>Login</h1>
            <p className="body-text">
              Generate and download your certificates all in one place!
            </p>

            <a href="#" className="rounded-button google-login-button">
              <span className="google-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                    fill="#fbbb00"
                  />
                  <path
                    d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                    fill="#518ef8"
                  />
                  <path
                    d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                    fill="#28b446"
                  />
                  <path
                    d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                    fill="#f14336"
                  />
                </svg>
              </span>
              <span>Sign in with google</span>
            </a>

            <div className="sign-in-seperator">
              <span>or Sign in with Email</span>
            </div>

            <div className="login-form-group">
              <label htmlFor="email">
                Email <span className="required-star">*</span>
              </label>
              <input type="text" placeholder="email@website.com" id="email" />
            </div>
            <div className="login-form-group">
              <label htmlFor="pwd">
                Password <span className="required-star">*</span>
              </label>
              <input type="text" placeholder="Minimum 8 characters" id="pwd" />
            </div>

            <div className="login-form-group single-row">
              <div className="custom-check">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>

              <a href="#" className="link forgot-link">
                Forgot Password ?
              </a>
            </div>

            <a href="#" className="rounded-button login-cta">
              Login
            </a>

            {/* <div className="mb-8">
              Not registered yet?{" "}
              <a href="#" className="link create-account">
                Create an account ?
              </a>
            </div> */}
          </div>
        </div>
        <div className="onboarding">
          <ImageCarounsel data={data} />
        </div>
      </div>
    </main>
  );
}
