import './Footer.scss'
import footerImage from '../../../Utils/Images/Footer-img.png'
import tenantCopyright from './tenent-copyright.svg'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-image">
        <img className='footer-img' src={footerImage} alt="Footer Logo" />
      </div>
      <div className="footer-text">
        <p className='property-copyright'>
          <img className='copyright-image' src={tenantCopyright} alt="Copyright symbol" />
        </p>
      </div>

    </div>
  )
}
