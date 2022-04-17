import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

const Blogs = () => {
    return (
        <div className='container w-50 mt-5'>
           <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>1. Difference between authorization and authentication?</Accordion.Header>
    <Accordion.Body>
    প্রমাণীকরণ হল আপনার পরিচয় যাচাই করার জন্য ব্যবহারকারীর নাম/ইউজার আইডি এবং পাসওয়ার্ডের মতো আপনার শংসাপত্রগুলি যাচাই করা। আপনি আপনার শংসাপত্রগুলি ব্যবহার করছেন বলে আপনি যা বলছেন তা আপনি কিনা তা সিস্টেম নির্ধারণ করে Authentication.
and
অন্য দিকে, আপনার পরিচয় সিস্টেম দ্বারা সফলভাবে প্রমাণীকরণের পরে অনুমোদন ঘটে, যা শেষ পর্যন্ত আপনাকে তথ্য, ফাইল, ডাটাবেস, তহবিল, অবস্থান, প্রায় যেকোনো কিছুর মতো সংস্থানগুলি অ্যাক্সেস করার সম্পূর্ণ অনুমতি দেয় Authorization
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>2. Why are you using firebase?</Accordion.Header>
    <Accordion.Body>
    Firebase ডাটাবেসের সমস্ত ডেটা রিয়েল-টাইম পরিচালনা করে৷ সুতরাং, ডাটাবেস থেকে ডেটা আদান-প্রদান সহজ এবং দ্রুত। তাই Firebase use করা হয়.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>3. What other options do you have to implement authentication?</Accordion.Header>
    <Accordion.Body>
    1. google <br />
2. Facebook<br />
3. Email/Password<br />
4. Phone<br />
5. Play Games<br />
6. Game Center<br />
7. Apple<br />
8. Microsoft<br />
9. Yahoo<br />
10. GitHub<br />
11.Twitter<br />
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>4. What other services does firebase provide other than authentication</Accordion.Header>
    <Accordion.Body>
    1. Cloud Firestore.<br />
2. Cloud Functions.<br />
3. Authentication.<br />
4. Hosting.<br />
5. Cloud Storage.<br />
6. Google Analytics.<br />
7. Predictions.<br />
8. Cloud Messaging.<br />
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Blogs;