import { FC } from "react"

import MuxPlayer from "@mux/mux-player-react/lazy"
import { cn } from "@/shared/utils"

interface Props {
  playbackId: string
  placheolder: string
  classes?: string
}

const MuxVideo: FC<Props> = ({ playbackId, placheolder, classes }) => {
  return (
    <MuxPlayer
      className={cn("aspect-custom-video object-cover", classes)}
      style={{ aspectRatio: 4 / 3 }}
      loading="viewport"
      placeholder={placheolder}
      startTime={0}
      playbackId={playbackId}
      metadata={{
        video_id: "video-id-123456",
        video_title: "Bick Buck Bunny",
        viewer_user_id: "user-id-bc-789",
      }}
      autoPlay
      muted
      loop
      playsInline
    />
  )
}
export default MuxVideo
