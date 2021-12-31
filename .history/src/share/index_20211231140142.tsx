/*
 * @Date: 2021-12-31 10:44:42
 * @LastEditors: lzj
 * @LastEditTime: 2021-12-31 14:01:42
 * @FilePath: \farmer-ui\src\share\index.tsx
 */

import { useEffect } from "react";
import style from "./style.less";

export type platform = "QQ" | "weibo" | "weixin" | "Facebook" | "QZone"
export type ShareProps = {
  platforms:platform[];
  url?:string;
  title?:string;
  pics?:string;
  summary?:string;
}

export default (props:ShareProps) => {
  const {
    platforms = [],
    url = window.location.href,
    title = "title",
    pics = document.images[0]?.srcs,
    summary = "test"
  } = props;

  return <div className={style.container}>
    {
      platforms.includes("QZone") && 
      <a className={style.QZone} target="_blank" href={`https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&sharesource=qzone&title=${title}&pics=${pics}&summary=${summary}`}>
        <img src="http://qzonestyle.gtimg.cn/ac/qzone_v5/app/app_share/qz_logo.png" title="QQ空间分享" alt="QQ空间分享" />
      </a>
    }
    {
      platforms.includes("weibo") && 
      <a target="_blank" href={`http://service.weibo.com/share/share.php?url=${url}&type=3&title=${title}&pic=${pics}`}>
        <img src="https://www.sinaimg.cn/blog/developer/wiki/16x16.png" title="微博分享" alt="微博分享" />
        {title}
        {pics}
      </a>
    }
  </div>
}