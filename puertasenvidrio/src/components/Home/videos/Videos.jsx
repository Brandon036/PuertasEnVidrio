import React from 'react'
import style from "./Videos.module.css"
function Videos() {
  return (
    <div className={style.Videosss}>
       
<iframe loading="lazy" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
 {/*https://www.youtube.com/embed/YaOorZmNVck?si=u2m2DRTEPSynLGCm  */}
</iframe>

<iframe loading="lazy"  src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
  {/* https://www.youtube.com/embed/3lBg3dRpg40?si=MI1TA7rG_sygmqJB */}
</iframe>

<iframe loading="lazy"  src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
 {/* https://www.youtube.com/embed/_J_LNeypkyk?si=RP9aAYyeqRM3J6EW */}
</iframe>

    </div>
  )
}

export default Videos