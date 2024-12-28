import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Play Safe, Play Nagad88 - Register Now</title>
        <meta
          name="description"
          content="Generated by Play Safe, Play Nagad88 - Register Now"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/fav.png" />
      </Head>
      <main>
        <div className="row px-5">
          <div className="col-md-8"></div>
          <div className="col-md-4 bg-color">
            <div className="logo text-center mb-4">
              <Image src="/img/logo.png" alt="Logo" width={300} height={100} />
            </div>
            <div className="text-center ">
              <h1 className="text-white title">
                Play Safe, <span className="text-white">Play Nagad88</span>
              </h1>
            </div>
            <div className="text-center bangla-text mb-4 mt-4">
              প্লে সেফ বা নিরাপদ গেমিংকী?
              <br />
              💵 টাকা উত্তোলনের গ্যারান্টি
              <br />
              ⚡️ মুহূর্তেই টাকা উত্তোলনের সুযোগ
            </div>
            <div className="text-center bangla-text  mb-4 mt-4">
              ৩০০% ক্রেজি ওয়েলকাম বোনাস <br />
              জমা ৳৫০০ পান ৳১,৫০০
            </div>
            <div className="form">
              <form>
                <div className="form-group form-input mb-4 ">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group form-input my-3 mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group form-input mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="form-group form-input">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number e.g. 01XXXXXXXXX"
                  />
                </div>
                <div className="text-center mt">
                  <a href="/register" className="reg-btn">
                    Play Safe Now
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}