import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="fixed top-6 left-6 z-30 w-10 h-10 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg text-white hover:bg-opacity-70 transition-all md:hidden"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );
};

export default BackButton;