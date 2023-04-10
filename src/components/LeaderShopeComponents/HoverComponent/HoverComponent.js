import Image from 'next/image'
import React from 'react'
import FacebookIcon from "../../../assets/images/logo/facebook-176-svgrepo-com.svg";
import Instagram from "../../../assets/images/logo/instagram-167-svgrepo-com.svg";
import Twitter from "../../../assets/images/logo/twitter-154-svgrepo-com.svg";
const HoverComponent = () => {
  return (
    
    <div className="member__hover">
                  <div className="member__content-inner">
                    <ul
                      className="social-icons  justify-content-center list-unstyled mb-0"
                      style={{}}
                    >
                      <li>
                        <a href="#">
                          <Image
                            src={FacebookIcon}
                            width={20}
                            height={20}
                            alt="facebook icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <Image
                          className="icons"
                            src={Instagram}
                            width={20}
                            height={20}
                            alt="Instagram icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <Image
                            src={Twitter}
                            width={20}
                            height={20}
                            alt="Twitter icon"
                          />
                        </a>
                      </li>
                    </ul>
                    {/* <!-- /.social-icons --> */}
                  </div>
                  {/* <!-- /.member-content-inner --> */}
                </div>
  )
}

export default HoverComponent