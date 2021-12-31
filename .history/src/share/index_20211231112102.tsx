/*
 * @Date: 2021-12-31 10:44:42
 * @LastEditors: lzj
 * @LastEditTime: 2021-12-31 11:21:01
 * @FilePath: \farmer-ui\src\share\index.tsx
 */
export type ShareProps = {
  url?:string;
  title?:string;
  pics?:string;
  summary?:string;
}

export default (props:ShareProps) => {
  const {
    url = window.location.href,
    title = document.title,
    pics = document.images[0],
    summary = ""
  } = props;
  console.log(title,pics,summary);
  return <div>
    <a target="_blank" href={`https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&sharesource=qzone&title=${title}&pics=${pics}&summary=${summary}`}>QQ空间</a>
  </div>
}