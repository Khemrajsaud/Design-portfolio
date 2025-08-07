import   'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const EducationModal = ({ isOpen, onClose, isDarkMode, educationData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm animate-fade-in">
      <div className={`relative w-full max-w-2xl rounded-xl shadow-2xl p-8 transform scale-95 animate-scale-in ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 text-2xl transition-colors duration-200 hover:scale-110 ${
            isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
          }`}
          aria-label="Close education details"
        >
          <FaTimes />
        </button>

        {/* Modal Title */}
        <h2 className={`text-3xl font-bold mb-6 text-center ${
          isDarkMode ? 'text-white' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent'
        }`}>
          My Education
        </h2>

        {/* Education List */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className={`p-5 rounded-lg border ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h3>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.institution}</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.year}</p>
              {edu.description && (
                <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

EducationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  educationData: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default EducationModal;
