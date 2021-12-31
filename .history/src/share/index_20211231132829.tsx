import { useEffect } from "react";

/*
 * @Date: 2021-12-31 10:44:42
 * @LastEditors: lzj
 * @LastEditTime: 2021-12-31 13:28:29
 * @FilePath: \farmer-ui\src\share\index.tsx
 */

export type platform = "QQ" | "weibo" | "weixin" | "facebook" | "QZone"
export type ShareProps = {
  platforms:string[];
  url?:string;
  title?:string;
  pics?:string;
  summary?:string;
}

export default (props:ShareProps) => {
  const {
    url = window.location.href,
    title = "title",
    pics ="http://qzonestyle.gtimg.cn/ac/qzone_v5/app/app_share/qz_logo.png",
    summary = "test"
  } = props;

  useEffect(()=>{
    console.log(document.title, document.images[0]);
  },[])
  // console.log(title,pics,summary);
  return <div>
    <a target="_blank" href={`https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&sharesource=qzone&title=${title}&pics=${pics}&summary=${summary}`}>
      <img src="http://qzonestyle.gtimg.cn/ac/qzone_v5/app/app_share/qz_logo.png" title="QQ空间分享" alt="QQ空间分享" />
    </a>
  </div>
}