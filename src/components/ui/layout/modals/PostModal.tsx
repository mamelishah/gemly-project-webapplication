import Lottie from "lottie-react";
import successAnimation from "../../../../assets/lotties/gemly-tick.json";
import ErrorAnimation from "../../../../assets/lotties/gemly-error.json";

const LottiePlayer = (Lottie as any).default || Lottie;

interface PostModalProps {
  message: string;
  isSuccesfull: boolean
}

function PostModal({ message, isSuccesfull }: PostModalProps) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <LottiePlayer
          animationData={isSuccesfull ? successAnimation : ErrorAnimation}
          loop={false}
          style={{ width: 150, height: 150 }}
        />
        <h3>{message}</h3>
      </div>
    </div>
  );
}

export default PostModal;