import Head from "next/head";
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
      <main className="main-bg">
        <div className="container-fluid">
          <div className="row align-items-center h-100">
            {/* Large Devices: Form on the Right */}
            <div className="d-none d-lg-flex col-lg-4 offset-lg-8 bg-dark text-white">
              <div className="container w-100">
                <div className="logo text-center mb-4">
                  <img
                    src="/img/logo.png"
                    alt="Logo"
                    className="img-fluid mb-4"
                    style={{ maxWidth: "200px" }}
                  />
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
                <form>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number e.g. 01XXXXXXXXX"
                    />
                  </div>
                  <div className="text-center mb-4 mt-4 mar">
                    <a href="/register" className="reg-btn">
                      Play Safe Now
                    </a>
                  </div>
                </form>
              </div>
            </div>

            {/* Mobile and Tablet Screens */}
            <div className="d-block d-lg-none bg-dark col-12 text-center">
              <img
                src="/img/Assets_Mobile-min.png"
                alt="Promotional Image"
                className="img-fluid mb-4"
              />
              <div className="container bg-dark text-white p-4">
                <img
                  src="/img/logo.png"
                  alt="Logo"
                  className="img-fluid mb-4"
                  style={{ maxWidth: "200px" }}
                />
                <div className="text-center ">
                  <h2 className="text-white title">
                    Play Safe, <span className="text-white">Play Nagad88</span>
                  </h2>
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
                <form>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number e.g. 01XXXXXXXXX"
                    />
                  </div>
                  <div className="text-center mb-4 mt-4 mar">
                    <a href="/register" className="reg-btn">
                      Play Safe Now
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
