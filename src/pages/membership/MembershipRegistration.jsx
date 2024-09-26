import React from 'react';
import Head from '../../components/Head';

const MembershipRegistration = () => {

  const membershipBenefits = [
    { key: 'Assured seat in the National Board / Managing Committee', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Preference in nomination as Chairman / co-Chairman of various Empowered & National committees / councils & select Government Committees.', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Priority in meetings with Ministers, Secretaries and officials of Government of India, Embassies, Foreign Dignitaries and Delegations etc.', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Speaking Slot opportunity in Sectorial Events.', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Nomination for Awards / T.V. Debates / Interviews. Govt. meets / Delegations etc.', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Branding in Managing committee Meetings & two Events in a year with logo on Backdrop', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Participation in Government & Business delegations (Domestic & Overseas)', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Generating awareness and gathering public support for industry issues.', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Networking / JV / Business Promotion & Investment Opportunities in India and Overseas.', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Recommendation for overseas visa.', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Help & Recommendation for issues of Members.', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Expert Advice & awareness about Central/State Govt.’s Schemes & Policies.', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Preferences, Complimentary Passes at Forum’s Expo, Summits, Conferences & functions.', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Update on Business News, Govt. Schemes, Policies, Notifications, and Circulars time to time.', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Phone Consultancy (12 Times in a Year).', patron: '✓', corporate: '✓', associate: '✓' },
    { key: 'Preferences & Discounts on Specific Consultancy Service, Expo Stalls / Summits, Advertising & Overseas Visits / Delegations / Exhibitions.', patron: '✓', corporate: '✓', associate: '✓' }
];

const membershipFees = [
  { category: 'One-time Membership and Processing Fees', amount: 'Rs. 1500/-*' },
  { category: 'PATRON MEMBERS:', amount: 'Rs. 50,000/-' },
  { category: 'BOARD MEMBERS:', amount: 'Rs. 20,000/-' },
  { category: 'Corporate / MNC / PSU / Govt. / Banks', amount: 'Rs. 1,00,000/-' },
  { category: 'Small (Investment Rs. 5 to 10 Crore)', amount: 'Rs. 15,000/-' },
  { category: 'Medium (Investment Rs. 11 to 50 Crore)', amount: 'Rs. 25,000/-' },
  { category: 'Medium (Investment Rs. 51 to 250 Crore)', amount: 'Rs. 50,000/-' },
  { category: 'Association / Chamber / NGO', amount: 'Rs. 15,000/-' },
  { category: 'Professionals', amount: 'Rs. 25,000/-' },
  { category: 'Overseas Membership', amount: '$ 1000/-' }
];

  return (
    <div>
      <Head pageheading="Membership Registration" />
      <div className='container my-5 py-5'>
        <h1 className="pb-5 text-center mainheading">Integrated Ayush Council Membership Registration</h1>
        <h2 className="liheading pb-5 administrativesub">Objectives & Mission of Membership Registration</h2>
        <div className='row'>
          <div className="col-md-6 col-style-1">
            <h3 className='liheading'><strong>Our Mission</strong></h3>
            <ul className="ul-style">
              <li>To be India's collective Voice of Trade, Industry & Service Providers</li>
              <li>Making Entrepreneurial & Self Reliant India</li>
              <li>Making India World's Manufacturing, Exporting, Sourcing & investment Hub</li>
              <li>Spreading awareness about Government's new Promotional Schemes & policies</li>
              <li>Providing a much needed Global platform for networking & business promotion</li>
              <li>To work as Catalyst between Business Community & Government</li>
              <li>Transforming Job Seekers to Job Creators</li>
            </ul>
          </div>
      
          <div className="col-md-6 col-style-2">
            <h3 className='liheading'><strong>Our Focus Areas</strong></h3>
            <ul className="ul-style">
              <li>Educating, Skilling, Promoting & Empowering MSMEs, Startup’s, Youth, Women, SC/ST, Rural & Budding Entrepreneurs</li>
              <li>Creating Agri – Entrepreneurs for Rural Transformation</li>
              <li>To be India's Leading Business Lobbying, Policy intervention & Advocacy Forum</li>
              <li>To do survey, research and Policy formation</li>
              <li>Organize Expo's, Trade Fairs, Summits/Meets, Conferences, Round Tables Webinar’s, Web-conferences, Business delegation, Road shows, workshops & Award Functions in India & abroad</li>
            </ul>
          </div>
        </div>
        <div className='row py-5'>
  <div className='col'>
    <h2 className="liheading pb-5 administrativesub"> Membership Terms & Conditions</h2>
    <ol className='ourptext '>
      <li className='py-2'>
        <strong>Compliance with Forum Terms:</strong> The Membership is subject to compliance with the terms of the forum.
      </li>
      <li className='py-2'>
        <strong>Membership Duration & Fees:</strong> Membership will be for the calendar year. Every member shall pay the prescribed membership fees by 31st March of every year.
      </li>
      <li className='py-2'>
        <strong>Trademark and Logo Usage:</strong> Members shall have the right to use the trademark/logo of the Forum with prior approval.
      </li>
      <li className='py-2'>
        <strong>Representation Restrictions:</strong> No member shall misrepresent or act as an agent or representative of the Forum.
      </li>
      <li className='py-2'>
        <strong>Liability Disclaimer:</strong> The Forum will not be liable for any loss or damages incurred/suffered while enjoying membership benefits, including but not limited to any commercial transaction between members.
      </li>
      <li className='py-2'>
        <strong>Governing Law:</strong> The Membership terms shall be construed and controlled by the laws of India.
      </li>
      <li className='py-2'>
        <strong>Non-Assignment of Membership Rights:</strong> No member shall assign its rights or obligations under the membership without prior written consent of the Forum.
      </li>
      <li className='py-2'>
        <strong>Withdrawal of Membership:</strong> A member may withdraw its membership at any time by giving 30 days' notice, along with a copy of the “no dues” certificate obtained from the Forum. The Forum shall not be liable to refund any membership fees.
      </li>
    </ol>
  </div>
</div>
<div className='row py-5'>
<h2 className="liheading pb-5 administrativesub">Benefites of Membership </h2>
<table className="table table-bordered">
   
            <tr className='text-white fs-5 benefitstablebg'>
                <th scope="col">S.No</th>
                <th scope="col">Benefit</th>
                <th scope="col">Patron Member</th>
                <th scope="col">Corporate Member</th>
                <th scope="col">Associate Member</th>
            </tr>
      
        <tbody>
            {membershipBenefits.map((benefit, index) => (
                <tr key={index}>
                    <th scope="row" className='text-center'>{index + 1}</th>
                    <td className='pl-4'>{benefit.key}</td>
                    <td className='text-center'>{benefit.patron}</td>
                    <td className='text-center'>{benefit.corporate}</td>
                    <td className='text-center'>{benefit.associate}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

<div className='row py-5'>
<h2 className="liheading pb-5 administrativesub"> Membership Fees Stucture</h2>
<table className="table table-bordered">
        <tr className='text-white fs-5 benefitstablebg'>
                <th scope="col">S.No</th>
                <th scope="col">Membership Category</th>
                <th scope="col">Fees</th>
            </tr>
  
        <tbody>
            {membershipFees.map((fee, index) => (
                <tr key={index}>
                    <th scope="row" className='text-center '>{index + 1}</th>
                    <td className='pl-4'>{fee.category}</td>
                    <td className='text-center'>{fee.amount}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

      </div>
    </div>
  );
};

export default MembershipRegistration;
