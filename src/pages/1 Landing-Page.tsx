import WelcomeText from "../components/Welcome-Text";
import lightImg from '../assets/images/boston-light.webp';
import oldImg from '../assets/images/boston og.webp';

function LandingPage() {
  return (
    <div className="diff aspect-[16/8] min-h-screen relative">
      <div className="diff-item-1 relative">
        <div className="text-primary-content text-9xl font-black grid place-content-center bg-cover bg-center" style={{ backgroundImage: `url(${lightImg})`, backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <WelcomeText />
          </div>
        </div>
      </div>
      <div className="diff-item-2 relative">
        <div className="bg-base-200 text-9xl font-black grid place-content-center bg-cover bg-center" style={{ backgroundImage: `url(${oldImg})`, backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <WelcomeText />
          </div>
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
}

export default LandingPage;