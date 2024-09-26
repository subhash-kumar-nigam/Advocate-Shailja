import React from 'react';
import CenterHeading from '../../components/CenterHeading'
import Head from '../../components/Head'

const EventNews = () => {
    const events = [
        {
            title: 'नेशनल आयुष कॉन्फ़्रेन्स सफलतापूर्वक सम्पन्न',
            description: 'कांस्टीट्यूशन क्लब ऑफ इंडिया, नई दिल्ली में दो दिवसीय नेशनल आयुष कॉन्फ़्रेन्स सफलतापूर्वक सम्पन्न। अरविन्दो आश्रम, दिल्ली के प्रतिनिधि पद्मश्री तारा जौहर को किया गया सम्मानित।'
        },
        {
            title: 'वर्क लाइफ बैलेंस थ्रू हॉलिस्टिक हेल्थ',
            description: 'इंडिया इंटरनेशनल सेंटर में आयुष्मान भारत न्यास के तत्वावधान में राष्ट्रीय आयुष सम्मेलन-"वर्क लाइफ बैलेंस थ्रू हॉलिस्टिक हेल्थ" का सफल आयोजन किया गया।'
        },
        {
            title: 'आयुषकॉन-2023 कॉन्फ्रेंस सफलतापूर्वक सम्पन्न',
            description: 'विज्ञान भवन, नई दिल्ली में दो दिवसीय आयुषकॉन-2023 कॉन्फ्रेंस सफलतापूर्वक सम्पन्न। पद्मश्री प्रो. ख़ादर वली के साथ कई दिग्गजों को आयुषकॉन एक्सलेन्स अवार्ड -2023 से सम्मानित किया गया।'
        },
        {
            title: 'दो दिवसीय राष्ट्रीय आयुष सम्मेलन',
            description: 'नई दिल्ली में दो दिवसीय राष्ट्रीय आयुष सम्मेलन सफलता पूर्वक सम्पन्न। इंडिया इंटरनेशनल सेंटर, नई दिल्ली में आयुष्मान भारत न्यास के तत्वावधान में राष्ट्रीय आयुष सम्मेलन का सफल आयोजन किया गया।'
        },
        {
            title: 'नेशनल आयुष कॉन्फ़्रेन्स',
            description: 'विज्ञान भवन दिल्ली में भव्य "नेशनल आयुष कॉन्फ़्रेन्स" आयोजित। आयुष सचिव वैद्य राजेश कोटेचा द्वारा आयुष को आगे बढ़ाने की दिशा में महत्वपूर्ण योगदान की हुई प्रशंसा।'
        },
        {
            title: 'National AYUSH Conference 2024',
            description: '21-22 March 2024 Vigyan Bhawan "National AYUSH Conference" impressively organized. Swami Sarvaloknand Ji Maharaj and Shri Ravi Kumar Iyer expressed their views as chief guests.'
        },
        {
            title: 'राष्ट्रीय आयुष सम्मेलन-2023',
            description: 'कांस्टीट्यूशन क्लब ऑफ इंडिया, नई दिल्ली में आयुष्मान न्यास के तत्वावधान में महर्षि अरविंद के 150वें जयंती के उपलक्ष्य पर दो दिवसीय राष्ट्रीय आयुष सम्मेलन-2023 का सफल आयोजन किया गया।'
        },
        {
            title: 'Balance between Work and Family',
            description: 'Dr. Bipin Kumar, Convener of the National AYUSH Conference, emphasized the importance of balancing work and family, and renowned diabetologist Dr. Biswaroop Roy Chowdhury discussed "Pseudo Illness."'
        }
    ];

    return (
      <>
       <Head pageheading="Event News" />
      <div className='container my-5 py-5'>
      <CenterHeading centerheading="Event News of Integrated Ayush Council" />
            <div className="row">
                <div className="col-md-12">
                    <div className="row  ">
                        {events.map((event, index) => (
                            <div key={index} className="col-lg-4 mb-4 col-md-6">
                                <div className="servicecarbg p-4" style={{ minHeight: '300px' }}>
                                    <div className="pt-3">
                                        <h4 className='liheading py-2'>{event.title}</h4>
                                        <p>{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default EventNews;
