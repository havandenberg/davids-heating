// No format on save

import { CustomerReview } from '../types';

const reviews: CustomerReview[] = [
  {
    date: '05-13-2024',
    description:
      'Our friends had Dave install a new AC system and recommended him to us.\nHe was fantastic! He always showed up on time, was efficient, neat and respectful of the interior of our home and very reasonably priced. We would highly recommend him for any work that you might need done.\n\nThe Germond Family\n\nHolden, MA',
    location: '',
    name: 'Michael Germond',
    project: '',
    stars: 5,
  },
  {
    date: '01-17-2024',
    description:
      'Dave was recommended to me by a coworker and he didn\'t disappoint. Dave was great to talk to and very professional when he came to replace our oil burner. He went above and beyond and was a pleasure to deal with. I would highly recommend Dave for all your heating and air conditioning needs!!!   Thanks Dave!!',
    location: '',
    name: 'Todd Gingras',
    project: '',
    stars: 5,
  },
  {
    date: '01-05-2024',
    description:
      'Dave installed central AC in our home. We needed two separate units and he ensured all areas of our home were covered despite a very small attic crawl space because we have cathedral ceiling! They have worked flawlessly for over 7 years. We recently had Dave back to hide the outdoor pipes under our house siding because we were residing our house. He redid the work so we now have the pipes under our walls/siding. He had to come back multiple times based on our siding companies progress. When we called, he was prompt in scheduling and communicative. The work done the second time around ended up taking much longer than anticipated, he stuck to his original price for the job. There were no surprises. I highly recommend Dave for your central AC needs!',
    location: '',
    name: 'Liz Gray',
    project: '',
    stars: 5,
  },
  {
    date: '12-18-2023',
    description:
      'David got my boiler running, then ordered and installed parts to keep it running. Friendly, timely and professional service. Highly recommend.',
    location: '',
    name: 'Michele Fulk',
    project: '',
    stars: 5,
  },
  {
    date: '08-08-2023',
    description:
      'Dave came to our house promptly when first contacted. He tested my old air conditioning system and found it to have zero charge. He tested it to see if it could hold a recharge. It could not. He gave us a quote for a new system that was competitive and reasonable. He replaced the whole system in one day. He was very thorough and professional. I would highly recommend his service to anyone.',
    location: '',
    name: 'William Zastrow',
    project: '',
    stars: 5,
  },
  {
    date: '08-08-2023',
    description:
      'Dave did an excellent job installing two centrally-ducted Mitsubishi heat pump systems in a new-construction duplex I recently built. He met with me when I was just about to start construction and took the time to go through different product options and ductwork layouts to make sure the system would meet my needs. His price was very reasonable, and he responded promptly and worked quickly whenever I needed him to be there during construction (even on days when the temperatures were below freezing and the house wasn’t fully closed in yet). Both systems have been operational for about a month and have kept the inside comfortable despite the hot, humid summer. One of the air handlers shut down after a couple of weeks of use due to a faulty part, but Dave came out the next day to replace the part and get it back up and running. He is knowledgeable, professional, and fair, and I would not hesitate to hire him again for my next project.',
    location: '',
    name: 'Sean Griffin',
    project: '',
    stars: 5,
  },
  {
    date: '09-22-2021',
    description:
      'David replaced an existing older Mini Split Air Conditioning unit with a Mitsubishi Mini Split Heat/ Air conditioner. A few weeks later, as scheduled, he installed an additional dual zone unit. Excellent work, Excellent products, on time, cleaned up work areas. Looking forward to the savings heating this winter. The units look great, are quiet and I\'d recommend him to anyone with HVAC needs.',
    location: '',
    name: 'Richard T Bennett',
    project: '',
    stars: 5,
  },
  {
    date: '05-21-2021',
    description:
      'David did a wonderful job installing a Mitsubishi mini split system for me. He showed up exactly when he said he would and did everything he said he was going to do. I got the impression from my initial meeting with him that he was trustworthy and knowledgeable and he proved that to be an accurate description. I\'m very confident that if I were to run into any issues with my system David would stand behind his work so I really couldn\'t be happier with how this project has gone. I\'ve only used the unit a few times so far but I\'m pretty impressed with it. I\'m looking forward to NOT lugging window A/C units around every spring and fall!',
    location: '',
    name: 'Robert Berk',
    project: '',
    stars: 5,
  },
  {
    date: '09-02-2020',
    description:
      'Dave was wonderful to work with. He came highly recommended and was willing to work outside of his stated range and come to Marlboro to do an install to our house. He gave us great advice and worked with us to find a system that was perfect for our home. After the install, he came back to confirm everything was working. If we need more work done, we\'d hire him again in an instant.',
    location: '',
    name: 'Alex D',
    project: '',
    stars: 5,
  },
  {
    date: '11-10-2018',
    description:
      'This is the best company! We hired David\'s to install central a/c based on not only the best price we got around  (we had 5 quotes) but also because David is the BEST contractor we have ever worked with. He\'s so nice and honest and he does a terrific job. We love our a/c system and are so glad we found David\'s- we would recommend him a million times over!',
    location: '',
    name: 'Sara',
    project: '',
    stars: 5,
  },
  {
    date: '10-05-2018',
    description:
      'David was a true pro and we were lucky to find him for our boiler replacement project. After receiving a very high quote for the project from our \"trusted\" oil company, my wife and I decided to get some other quotes for the job. David gave us a quote that worked with our budget and we just had a good rapport with him when he came to our home to look at our current heating system. David did a superior job communicating with us while setting up the timing of the project, letting us know the status during the project, and finally letting us know when the project was compete. We were very satisfied with the work he did, would recommend him highly, and would use him again.',
    location: 'Holden, MA',
    name: 'Andrew R',
    project: 'Install Oil Furnace / Forced Air Heating System',
    stars: 5,
  },
  {
    date: '06-06-2018',
    description:
      'My A/C died during a heatwave on a weekend. I had a technician on site Monday morning and repaired in about an hour. I felt the tech did a thorough diagnostic, explained my repair options and did not attempt to up-sell me on a new unit. Price was reasonable and fair for this area. I recommend David\'s Heating & Air Conditioning company.',
    location: '',
    name: 'Steven R',
    project: '',
    stars: 5,
  },
  {
    date: '04-19-2018',
    description:
      'We were lucky enough to find David to install central air in our house. David is the most professional and personable contractor we have ever worked with. He is extremely honest and does wonderful work. He also keeps the work area very neat and clean. We would recommend him a million times over.',
    location: 'Auburn, MA',
    name: 'Sara L',
    project: 'Install a Central Air Conditioning System',
    stars: 5,
  },
  {
    date: '10-16-2017',
    description:
      'He phenomenal. He kept his work place clean. He was great to work with. Has great customer service.',
    location: '',
    name: 'Sandy',
    project: 'Install a Central Air Conditioning System',
    stars: 5,
  },
  {
    date: '10-16-2017',
    description:
      'I have recommended him to four of my friends and they are highly satisfied.',
    location: '',
    name: 'Dave M',
    project: 'Install a Central Air Conditioning System - For Business',
    stars: 5,
  },
  {
    date: '07-14-2010',
    description:
      'Working with David was absolutely wonderful. First of all, he is extremely personable and up front. He\'s also prompt, a great communicator and hard working. Any issues that popped up during installation were handled right away and he did a fabulous job even considering the fact that the builders of my home cut some corners with the forced air system he had to work with. My house feels great! I\'m keeping his number on hand for any heating/cooling needs I may have and I would definitely recommend him.',
    location: 'Worcester, MA',
    name: 'Shawna C',
    project: 'Install a Central Air Conditioning System',
    stars: 5,
  },
  {
    date: '06-03-2010',
    description:
      'David called me within minutes of filling out my service request and within 24 hours he had been to my house and fixed my central a/c. I had used another company and for two years they were charging me for recharging the unit without actually fixing the problem. David found the leak and fixed it immediately, I couldn\'t be happier with the quick service he provided. I would definitely recommend him to a friend.',
    location: 'Sturbridge, MA',
    name: 'Heather H',
    project: 'Repair or Service a Central Air Conditioning System',
    stars: 5,
  },
];

export default reviews;
