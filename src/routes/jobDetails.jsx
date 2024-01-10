import '../styles/details.css'

const JobDetails = () => {
  return (
      <section id="jobDescriptionWrapper">
        <div id="companyDetailsCard">
          <a href="#" id="companyLogo" style={{backgroundColor: 'hsla(36, 87%, 49%, 1)'}}>
            <img src="/logos/scoot.svg" alt="Scoot" />
          </a>
          <h3>Scoot<small>scoot.com</small></h3>
          <a href="#" className="button alternate">Company Site</a>
        </div>
        <div id="jobDetailsCard">
          <header>
            <span>1w ago <i className="bullet"></i> Part Time</span>
            <h3>Senior Software Engineer</h3>
            <small>United Kingdom</small>
            <button className="button" id="applyNowButton">Apply Now</button>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
            nec
            urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
            viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
            Suspendisse
            potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
            augue.
            Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum
            hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
            euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
            sed, urna.
          </p>
          <h3>Requirements</h3>
          <p>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu
            pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
            varius,
            adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc
            tellus
            ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate
            vel,
            nisl.
          </p>
          <ul>
            <li>Morbi interdum mollis sapien. Sed</li>
            <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
            <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
              pellentesque mauris ut lectus.
            </li>
            <li>Morbi interdum mollis sapien. Sed</li>
          </ul>
          <h3>What You Will Do</h3>
          <p>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi
            purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum
            hendrerit
            tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui,
            eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <ol>
            <li>Morbi interdum mollis sapien. Sed</li>
            <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
            <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
              pellentesque mauris ut lectus.
            </li>
            <li>Morbi interdum mollis sapien. Sed</li>
          </ol>
        </div>
      </section>
  )
}

export default JobDetails