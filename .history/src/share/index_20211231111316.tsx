/*
 * @Date: 2021-12-31 10:44:42
 * @LastEditors: lzj
 * @LastEditTime: 2021-12-31 11:13:16
 * @FilePath: \farmer-ui\src\share\index.tsx
 */
export type ShareProps = {
  title?:string;
  pics?:string;
  summary?:string;
}
export default (props:ShareProps) => {
  return <div>
    <a href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=你的网址&sharesource=qzone&title=你的分享标题&pics=你的分享图片&summary=你的分享描述信息">QQ空间</a>
  </div>
}