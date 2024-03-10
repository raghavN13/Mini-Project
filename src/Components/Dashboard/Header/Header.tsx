import  { useState, useEffect } from 'react';
import logo from '../../../Utils/Images/logo.png';
import globe from '../../../Utils/Images/globe.svg';
import dollar from '../../../Utils/Images/dollar.svg';
import './Header.scss';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [languageOptionsOpen, setLanguageOptionsOpen] = useState(false);
  const [currencyOptionsOpen, setCurrencyOptionsOpen] = useState(false);

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setLanguageOptionsOpen(false);
    setCurrencyOptionsOpen(false);
  };

  const toggleLanguageOptions = () => {
    setLanguageOptionsOpen(!languageOptionsOpen);
    setCurrencyOptionsOpen(false);
  };

  const toggleCurrencyOptions = () => {
    setCurrencyOptionsOpen(!currencyOptionsOpen);
    setLanguageOptionsOpen(false);
  };
  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setLanguageOptionsOpen(false);
    console.log("the language is ", language);
    i18n.changeLanguage(language);
  };

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="engine-info">
          <p className='text'>{i18n.t('header.subtitle')}</p>
        </div>
      </div>
      <div className="hamburger-icon" onClick={toggleDropdown}>
        <i className="fi fi-rs-burger-menu"></i>
      </div>
      <div className={`navbar-right ${isDropdownOpen ? 'dropdown-open' : ''}`}>
        <div className="language" onClick={toggleLanguageOptions}>
          <img className='language-image' src={globe} alt="Globe" />
          <p>{selectedLanguage}</p>
          {languageOptionsOpen && (
            <div className='dropdown'>
              <p onClick={() => handleLanguageChange('En')}>English</p>
              <p onClick={() => handleLanguageChange('Fr')}>French</p>
            </div>
          )}
        </div>
        <div className="currency" onClick={toggleCurrencyOptions}>
          <img className='currency-image' src={dollar} alt="Dollar Symbol" />
          <p>{selectedCurrency}</p>
          {currencyOptionsOpen && (
            <div className='dropdown'>
              <p onClick={() => handleCurrencyChange('USD')}>USD</p>
              <p onClick={() => handleCurrencyChange('INR')}>INR</p>
              <p onClick={() => handleCurrencyChange('AUS')}>AUS</p>
            </div>
          )}
        </div>
        <button className="login-button">{i18n.t('header.login')}</button>
      </div>
    </div>
  );
}
