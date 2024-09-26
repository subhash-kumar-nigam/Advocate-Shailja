import React from 'react'
import presedent from '../../Assets/images/presedenceofiac.png'
import security from '../../Assets/images/security.png'
const Leadership = () => {
  return (
    <div>
      <div className='container my-5 py-5'>
         <div className='row pb-5'>
            <div className='col-lg-7'> 
               <h2 className='administrativemain'>President</h2>
               <h3 className=' administrativesub pt-2'>Dr. Shishta Nadda Basu</h3>
               <p className='text-justify ourptext pt-4'>Dr. Shishta Nadda Basu is the best doctor for Gynaecology, Obstetrics, and IVF in India, presently working as a Senior Director & Head of Department at Max Super Speciality Hospital, Shalimar Bagh, New Delhi. Dr. Shishta Nadda Basu has extensive experience in the field of Infertility, Intra-Uterine Insemination (IUI), IVF, D&C, Advanced Hysteroscopy, Laparoscopy for uterus removal, Uterine Fibroid Treatment, Ovarian cysts, Ectopic Pregnancy, Endometriosis Treatment, Polycystic ovaries, and Hysterectomy Surgery.</p>
               <p className='text-justify ourptext pt-4'>With her vast expertise and a commitment to patient care, Dr. Basu has helped numerous couples overcome infertility challenges. Her advanced treatment techniques and personalized approach have made her a trusted name in the field. She is known for her compassionate care and attention to detail, providing the best possible outcomes for her patients.</p>
            </div>
            <div className='col-lg-5 text-right'>
               <img src={presedent}  alt='presedent' className='img-fluid presedentimg' />
              </div>
         </div>
         <div className='row py-5 my-5'>
         <div className='col-lg-5 text-left'>
               <img src={security}  alt='presedent' className='img-fluid presedentimg' />
              </div>
            <div className='col-lg-7'> 
               <h2 className='administrativemain'>General Secretary </h2>
               <h3 className=' administrativesub pt-2'>Dr.Bipin kumar</h3>
               <p className='text-justify ourptext pt-4'>Dr. Bipin Kumar serves as the General Secretary of the renowned Vishwa Hindi Parishad. His proactive involvement revolves around the promotion of Hindi and the Ayush system in India, where he collaborates closely with various governmental ministries, state governments, corporations, banks, industry associations, MSMEs, youth, and emerging entrepreneurs.</p>
               <p className='text-justify ourptext pt-4'>Driven by a strong belief in devotion, dedication, and selfless service, Dr. Bipin Kumar has made it his mission to unite Indians and contribute to the social, cultural, economic growth, development, and empowerment of India. Additionally, he is committed to uplifting the weaker and underprivileged sections of society, striving to bring them into the mainstream and ensuring their overall well-being.</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Leadership
