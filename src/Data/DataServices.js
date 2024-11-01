import img_1 from "../Assets/ser-db-icon.png";
import img_2 from "../Assets/ser-iptv-icon.png";
import img_3 from "../Assets/ser-wifi-icon.png";
import img_4 from "../Assets/ser-access-ctrl-icon.png";
import img_5 from "../Assets/ser-cctv-icon.png";
import img_6 from "../Assets/ser-pbx-icon.png";

import services_img from "../Assets/services_img.png";
import child_service_img from "../Assets/child_service.png";
import EnterpriseNET from "../Assets/EnterpriseNET.jpg";
import NETSOLN from "../Assets/NETSOL.png";
import WLAN from "../Assets/WLAN.jpg";
import Security from "../Assets/security.jpg";
import Collaboration from "../Assets/collaboration.jpg";
import Data from "../Assets/data.jpg";
import DataCenter from "../Assets/Datacenter.jpg";
import DCBackup from "../Assets/DCbackup.jpg";
import Decoration from "../Assets/DCDecoration '.jpg";
import containments from "../Assets/contaiment.jpg";
import IoT from "../Assets/IoT.png";
import CCTVINS from "../Assets/cctvinst.jpg";
import Gate from "../Assets/gate.jpg";
import BMS from "../Assets/BMS.jpg";
import SAT from "../Assets/satellite.jpg";
import PBXSYS from "../Assets/PBXSYS.png";
import Ict from "../Assets/ICT.jpg";
import Virtual from "../Assets/virtual.jpg";
import Onsite from "../Assets/onsitecon.png";
const DataServices = [
  {
    id: 1,
    thumbnail: img_1,
    img: EnterpriseNET,
    title: "Enterprise Networking",
    shortDesc:
      "We specialize in secure, scalable enterprise networking solutions, enabling seamless communication, collaboration, and resource sharing to drive your organization's productivity and success.",
    desc: "LeuNet is a leading provider of comprehensive enterprise networking solutions. With our state-of-the-art technology and expertise, we empower businesses to thrive in the rapidly evolving digital landscape. Our secure and scalable infrastructure enables seamless communication, collaboration, and resource sharing, enhancing productivity and efficiency. Our dedicated team ensures reliable connectivity, advanced network performance, and proactive support. LeuNet's tailored networking solutions are designed to meet your organization's unique needs, driving innovation and success. Trust LeuNet as your partner to deliver cutting-edge networking solutions that optimize your business operations and keep you ahead of the competition.",
    childServices: [
      {
        id: 1,
        img: NETSOLN,
        title: "Network Solutions and SCS",
        shortDesc:
          "LeuNet offers Network Solutions and SCS, delivering comprehensive enterprise networking services for seamless communication, collaboration, and resource sharing within organizations.",
        desc: `At LeuNet, we take pride in offering a comprehensive suite of enterprise networking services, including Network Solutions and SCS (Secure Connectivity Services).
                <p>
                Our Network Solutions are tailored to meet the unique needs of businesses, providing a robust and scalable infrastructure that enables seamless communication, collaboration, and resource sharing. Whether it's building a secure local area network (LAN), deploying wireless networks, or implementing virtual private networks (VPNs), our expert team ensures reliable connectivity and advanced network performance. We leverage cutting-edge technology to optimize network efficiency, enhance productivity, and meet the demands of a digitally connected world.
                </p>
                <p>
                As for our SCS, we understand the critical importance of secure connectivity in today's business landscape. Our Secure Connectivity Services encompass a range of solutions, including firewall implementation, intrusion detection and prevention systems (IDPS), secure remote access, and network segmentation. We prioritize data protection and confidentiality, providing robust security measures to safeguard your organization's sensitive information from cyber threats.
                </p>
                <p>
                With our Network Solutions and SCS, we aim to empower businesses with a secure and reliable enterprise networking infrastructure that drives productivity, enhances collaboration, and supports efficient workflow. Our dedicated team of professionals ensures seamless integration, proactive support, and ongoing maintenance to keep your network optimized and resilient.
                </p>
                <p>
                Choose LeuNet as your trusted partner for enterprise networking solutions. We are committed to delivering top-notch services, leveraging industry-leading technology, and providing personalized support to meet your organization's networking needs and fuel its success in today's competitive landscape.
                </p>`,
      },
      {
        id: 2,
        img: WLAN,
        title: "WLAN solutions ",
        shortDesc:
          "LeuNet offers WLAN solutions, providing secure and scalable wireless networking services for seamless connectivity and mobility within organizations.",
        desc: `At LeuNet, we understand the growing demand for wireless connectivity and mobility within organizations. That's why we offer WLAN (Wireless Local Area Network) solutions as part of our comprehensive enterprise networking services.

                Our WLAN solutions are designed to provide secure, reliable, and scalable wireless networking infrastructure for businesses of all sizes. We work closely with our clients to assess their specific requirements and design tailored WLAN solutions that meet their needs.
                
                From WLAN planning and design to installation and optimization, our expert team ensures seamless connectivity and maximum coverage throughout your organization. We leverage industry-leading wireless technologies to deliver high-performance WLAN solutions that support the increasing demand for bandwidth-intensive applications, mobility, and IoT devices.
                
                Security is paramount in wireless networks, and we prioritize implementing robust security measures to protect your organization's data and ensure confidentiality. Our WLAN solutions include features like authentication, encryption, access control, and intrusion detection systems to safeguard your network against unauthorized access and cyber threats.
                
                With our WLAN solutions, businesses can enjoy the benefits of wireless connectivity, enabling flexible work environments, improved collaboration, and enhanced productivity. Our dedicated team provides ongoing support, monitoring, and maintenance to ensure optimal performance and reliability of your WLAN infrastructure.
                
                Choose LeuNet as your trusted partner for WLAN solutions. We are committed to delivering secure and scalable wireless networking services that empower your organization with seamless connectivity, mobility, and the flexibility needed to thrive in today's digital age.`,
      },
      {
        id: 3,
        img: Security,
        title: "Network Security Solutions",
        shortDesc:
          "LeuNet provides Network Security Solutions, offering robust and comprehensive measures to protect your organization's network from cyber threats and ensure data confidentiality.",
        desc: `At LeuNet, we recognize the critical importance of network security in today's rapidly evolving threat landscape. That's why we offer Network Security Solutions designed to safeguard your organization's network infrastructure, protect sensitive data, and ensure business continuity.

                Our Network Security Solutions encompass a comprehensive range of measures and technologies to mitigate cyber threats. From firewalls and intrusion detection systems (IDS) to secure remote access and endpoint protection, we implement a multi-layered approach to defend against various attack vectors.
                
                Our expert team conducts thorough assessments to identify vulnerabilities and design tailored security solutions that align with your organization's unique needs. We prioritize proactive measures to detect and prevent security breaches, ensuring data confidentiality, integrity, and availability.
                
                With our Network Security Solutions, you can have peace of mind knowing that your network is fortified against unauthorized access, malware, ransomware, and other sophisticated threats. We also provide ongoing monitoring, incident response, and security updates to stay ahead of emerging risks.
                
                In addition to protecting your network infrastructure, our Network Security Solutions also address compliance requirements. We assist organizations in achieving regulatory compliance, such as GDPR or HIPAA, by implementing appropriate security controls and facilitating audits.
                
                Partnering with LeuNet for Network Security Solutions means having a dedicated team of cybersecurity experts on your side. We work closely with you to assess, implement, and maintain robust security measures, ensuring the integrity and resilience of your network in the face of evolving threats.
                
                Choose LeuNet as your trusted provider of Network Security Solutions, and fortify your organization's network with comprehensive protection that safeguards your data, reputation, and business operations.`,
      },
      {
        id: 4,
        img: Collaboration,
        title: "Collaboration/Conference Solution",
        shortDesc:
          "LeuNet offers Collaboration/Conference Solutions, enabling seamless communication, virtual meetings, and efficient collaboration for teams across locations.",
        desc: `At LeuNet, we understand the importance of effective collaboration and seamless communication for modern organizations. That's why we offer Collaboration/Conference Solutions designed to connect teams, enable virtual meetings, and foster efficient collaboration across different locations.

                Our Collaboration/Conference Solutions leverage cutting-edge technologies and platforms to facilitate real-time communication, document sharing, and video conferencing. We help businesses implement robust collaboration tools that streamline workflows, enhance productivity, and bridge the gap between remote teams.
                
                With our solutions, organizations can conduct virtual meetings, host webinars, and enable interactive presentations, ensuring effective communication and engagement among team members regardless of their physical location. Our platforms support features such as screen sharing, chat functions, and collaborative document editing, enabling seamless collaboration and knowledge sharing.
                
                We work closely with our clients to understand their collaboration needs and tailor solutions that fit their specific requirements. Whether it's implementing cloud-based collaboration platforms, setting up video conferencing systems, or integrating communication tools, our expert team ensures smooth deployment and user-friendly experiences.
                
                Our Collaboration/Conference Solutions empower organizations to break geographical barriers, enhance teamwork, and foster innovation. With the flexibility to collaborate and communicate effectively, businesses can adapt to dynamic work environments and maintain a competitive edge in today's global market.
                
                Partner with LeuNet for Collaboration/Conference Solutions that transform how your teams work together. Experience seamless communication, virtual meetings, and enhanced collaboration that drive productivity, improve decision-making, and boost overall organizational performance.`,
      },
    ],
  },
  {
    id: 2,
    thumbnail: img_2,
    img: Data,
    title: "Date Center Faculty",
    shortDesc:
      "LeuNet ICT Solutions provides comprehensive data center facility and power services to ensure the efficient and reliable operation of your critical IT infrastructure. We understand the importance of a well-designed and properly managed data center environment, and our services are tailored to meet the unique requirements of your business. Here is a small description of our data center facility and power services: ",
    desc: "LeuNet ICT Solutions provides comprehensive data center facility and power services to ensure the efficient and reliable operation of your critical IT infrastructure. We understand the importance of a well-designed and properly managed data center environment, and our services are tailored to meet the unique requirements of your business. Here is a small description of our data center facility and power services:",
    childServices: [
      {
        id: 1,
        img: DataCenter,
        title: "Data Center AC system",
        shortDesc:
          "With LeuNet ICT Solutions' data center AC systems, you can create an environment that ensures the optimal performance, reliability, and longevity of your critical IT infrastructure. Our solutions are designed to deliver efficient cooling, scalability, redundancy, and energy savings, allowing you to focus on your core business while we take care of your data center cooling needs.",
        desc: `LeuNet ICT Solutions provides efficient and reliable data center air conditioning (AC) systems to ensure optimal cooling and temperature control within your data center facility. We understand the criticality of maintaining an optimal operating environment for your IT infrastructure, and our AC systems are designed to meet the specific cooling requirements of data centers. Here is a small description of our Data Center AC system services:

 <br/> <br/> <br/>

                <ol>
                1. Precision Cooling: Our data center AC systems employ precision cooling technologies to maintain precise temperature and humidity levels within the data center. This helps prevent equipment overheating and ensures optimal performance and reliability of your IT infrastructure.
                </ol>
                <ol>
                2. Scalability: We offer scalable AC solutions that can be tailored to the size and needs of your data center. Whether you have a small, medium, or large-scale data center, we can provide the right AC system to efficiently cool your equipment and handle increasing heat loads as your IT infrastructure grows.
                </ol>
                <ol>
                3. Redundancy and Fault Tolerance: We understand the importance of uninterrupted cooling in data centers. Our AC systems are designed with redundancy and fault tolerance features to ensure continuous operation, even in the event of component failures. Redundant cooling units and backup systems are implemented to minimize the risk of downtime due to cooling system issues.
                </ol>
                <ol>
                4. Redundancy and Fault Tolerance: We understand the importance of uninterrupted cooling in data centers. Our AC systems are designed with redundancy and fault tolerance features to ensure continuous operation, even in the event of component failures. Redundant cooling units and backup systems are implemented to minimize the risk of downtime due to cooling system issues.
                </ol>
                <ol>
                5. Monitoring and Management: Our data center AC systems can be integrated with advanced monitoring and management software, allowing for centralized control and real-time monitoring of temperature and humidity levels. This enables proactive maintenance and ensures prompt detection of any anomalies or potential cooling issues.
                </ol>
                <ol>
                6. Maintenance and Support: LeuNet ICT Solutions provides comprehensive maintenance and support services for data center AC systems. Our team of skilled technicians can perform regular maintenance, inspections, and repairs to keep your AC system operating at peak performance and extend its lifespan.
                </ol>
                <p>With LeuNet ICT Solutions' data center AC systems, you can create an environment that ensures the optimal performance, reliability, and longevity of your critical IT infrastructure. Our solutions are designed to deliver efficient cooling, scalability, redundancy, and energy savings, allowing you to focus on your core business while we take care of your data center cooling needs.</p>`,
      },
      {
        id: 2,
        img: DCBackup,
        title: "Data center Power Back-Up System",
        shortDesc:
          "With LeuNet ICT Solutions' data center AC systems, you can create an environment that ensures the optimal performance, reliability, and longevity of your critical IT infrastructure. Our solutions are designed to deliver efficient cooling, scalability, redundancy, and energy savings, allowing you to focus on your core business while we take care of your data center cooling needs.",
        desc: `LeuNet ICT Solutions provides efficient and reliable data center air conditioning (AC) systems to ensure optimal cooling and temperature control within your data center facility. We understand the criticality of maintaining an optimal operating environment for your IT infrastructure, and our AC systems are designed to meet the specific cooling requirements of data centers. Here is a small description of our Data Center AC system services:
<p>
LeuNet ICT Solutions specializes in providing robust and reliable data center power backup systems to ensure uninterrupted operation and protection against power outages. Our comprehensive range of solutions is designed to meet the specific power backup requirements of data centers, offering scalability, redundancy, and advanced monitoring capabilities. With our high-quality uninterruptible power supply (UPS) systems, we ensure a seamless power supply to critical IT infrastructure, safeguarding against data loss, equipment damage, and system downtime. Our backup generator systems automatically kick in during extended power outages, providing long-duration power backup to keep your data center running smoothly. We incorporate redundant components and fault-tolerant design principles to eliminate single points of failure, ensuring continuous power supply even in challenging conditions. Our power distribution units (PDUs) efficiently distribute power to IT equipment, while advanced monitoring and management software enable real-time monitoring, proactive maintenance, and remote management of the power backup infrastructure. With LeuNet ICT Solutions, you can rely on our expertise and support to mitigate the risks associated with power disruptions, ensuring uninterrupted operation and peace of mind for your data center operations.
</p>`,
      },
      {
        id: 3,
        img: Decoration,
        title: "Data Center Decoration and renovation",
        shortDesc:
          "LeuNet ICT Solutions goes beyond providing technical infrastructure and also offers comprehensive services for data center decoration and renovation. We understand the importance of creating an optimized and efficient environment for your data center operations. Our team of experts specializes in designing and renovating data center spaces to enhance functionality, aesthetics, and operational efficiency.",
        desc: `
                LeuNet ICT Solutions provides data center decoration and renovation services to enhance the functionality, aesthetics, and efficiency of your data center facility. Our experienced team works closely with you to understand your specific requirements and goals. We offer space planning, interior design, and layout optimization services to maximize the use of available space and ensure efficient equipment placement, cable management, and airflow. Additionally, we provide a range of decoration options, including paint colors, flooring materials, lighting solutions, and furniture selection, to create a professional and visually appealing environment. Our project management team ensures minimal disruption to your operations and timely completion of the renovation process. With LeuNet ICT Solutions, you can transform your data center into an optimized and visually impressive facility that reflects your brand image and supports your business objectives.
<p>
LeuNet ICT Solutions goes beyond providing technical infrastructure and also offers comprehensive services for data center decoration and renovation. We understand the importance of creating an optimized and efficient environment for your data center operations. Our team of experts specializes in designing and renovating data center spaces to enhance functionality, aesthetics, and operational efficiency.

Whether you are setting up a new data center or looking to revamp your existing facility, we work closely with you to understand your specific needs and goals. Our services include space planning, interior design, and layout optimization to ensure optimal use of available space. We pay attention to factors such as equipment placement, cable management, and airflow considerations to maximize efficiency and minimize potential bottlenecks.

Moreover, we offer a wide range of data center decoration options to create a professional and visually appealing environment. From paint colors and flooring materials to lighting solutions and furniture selection, our team carefully selects and recommends suitable options that align with your brand image and create a conducive working environment for your staff.

During the renovation process, we prioritize minimal disruption to your ongoing operations. We work diligently to ensure a smooth transition and coordinate with your team to minimize any downtime or inconvenience. Our experienced project management team oversees the entire process, ensuring timely completion and adherence to high-quality standards.

LeuNet ICT Solutions aims to create data center spaces that are not only functional but also visually appealing and conducive to productivity. We understand the importance of a well-designed and renovated data center in enhancing operational efficiency, employee satisfaction, and overall business performance. Trust us to transform your data center into a modern, efficient, and visually impressive facility that meets your operational needs and reflects your brand identity.</p>`,
      },
      {
        id: 4,
        img: containments,
        title: "Cold Aisle and Hot aisle containments and Rack Solutions ",
        shortDesc:
          "LeuNet ICT Solutions offers comprehensive solutions for cold aisle and hot aisle containments, as well as rack solutions, to optimize the airflow and cooling efficiency in your data center.",
        desc: `LeuNet ICT Solutions provides efficient and reliable data center air conditioning (AC) systems to ensure optimal cooling and temperature control within your data center facility. We understand the criticality of maintaining an optimal operating environment for your IT infrastructure, and our AC systems are designed to meet the specific cooling requirements of data centers. Here is a small description of our Data Center AC system services:
<p>
Cold Aisle and Hot Aisle Containments:
We understand the importance of proper airflow management in data centers to prevent hotspots, improve cooling efficiency, and reduce energy consumption. Our cold aisle and hot aisle containment solutions are designed to separate the hot and cold air streams, creating a controlled environment for efficient cooling.
</p>
<p>Cold Aisle Containment: We design and implement cold aisle containment systems that enclose the cold aisles with specially designed panels and doors. This prevents the mixing of hot and cold air, allowing the cooling system to deliver chilled air directly to the IT equipment intake. By maintaining a consistent and targeted airflow, cold aisle containment optimizes cooling efficiency and minimizes energy waste.</p>
<p>Hot Aisle Containment: Our hot aisle containment solutions focus on isolating and containing the hot air generated by IT equipment. By enclosing the hot aisles with containment structures, we ensure that the hot air is efficiently captured and directed towards the cooling system for effective removal. Hot aisle containment helps improve cooling system performance, reduces energy consumption, and enhances overall data center efficiency.</p>`,
      },
    ],
  },
  {
    id: 3,
    thumbnail: img_3,
    img: IoT,
    title: "Smart Infrastructure and IoT systems",
    shortDesc:
      "LeuNet ICT Solutions specializes in designing and implementing smart infrastructure and IoT (Internet of Things) systems that enable organizations to harness the power of connected devices and data-driven technologies.",
    desc: "LeuNet ICT Solutions specializes in designing and implementing smart infrastructure and IoT (Internet of Things) systems that enable organizations to harness the power of connected devices and data-driven technologies. Our smart infrastructure solutions encompass a wide range of sectors, including buildings, cities, industries, and transportation. By integrating IoT devices, sensors, and intelligent data analytics, we create interconnected ecosystems that enhance operational efficiency, improve resource management, and enable data-driven decision-making. From smart energy management systems and intelligent lighting solutions to smart parking, waste management, and surveillance systems, we leverage cutting-edge technologies to transform traditional infrastructures into intelligent, sustainable, and interconnected environments. With LeuNet ICT Solutions' smart infrastructure and IoT systems, you can unlock new opportunities, optimize operations, and create a more connected and efficient future for your organization.",
    childServices: [
      {
        id: 1,
        img: CCTVINS,
        title: "CCTV System Installation description",
        shortDesc:
          "LeuNet ICT Solutions offers professional and reliable CCTV system installation services to help businesses and organizations enhance their security and surveillance capabilities. Our team of experts specializes in designing and implementing tailored CCTV solutions that meet your specific requirements and provide comprehensive coverage of your premises.",
        desc: `
                Our CCTV system installation process begins with a thorough assessment of your site to identify the optimal camera placements and coverage areas. We take into account factors such as the layout of the premises, potential vulnerabilities, and specific security needs. Based on this assessment, we develop a customized CCTV system design that includes the selection of high-quality cameras, recording devices, and other necessary components.
<p>
Our skilled technicians then handle the installation process with precision and attention to detail. They expertly mount and position the cameras, ensuring optimal angles and coverage. They also configure and connect the recording devices, set up monitoring stations, and establish remote access capabilities for convenient surveillance management.
<p>We prioritize the use of advanced technologies and industry-leading equipment to deliver superior image quality, reliable performance, and efficient storage and retrieval of video footage. Our CCTV systems can be integrated with other security systems, such as access control and alarm systems, to provide a comprehensive security solution.
With our CCTV system installation services, you can have peace of mind knowing that your premises are protected and monitored around the clock. LeuNet ICT Solutions is committed to delivering high-quality CCTV solutions that meet your security needs, enhance situational awareness, and safeguard your assets and personnel.</p>`,
      },
      {
        id: 2,
        img: Gate,
        title: "Gate Automation System",
        shortDesc:
          "LeuNet ICT Solutions offers advanced gate automation systems to enhance security, convenience, and access control for residential, commercial, and industrial properties. Our gate automation solutions provide efficient and reliable operation, allowing for seamless entry and exit while maintaining strict control over access.",
        desc: `<p>Our gate automation systems incorporate state-of-the-art technologies, including motorized mechanisms, sensors, and control panels, to automate the opening and closing of gates. We offer a range of automation options, including sliding gates, swing gates, and barrier gates, to suit different property configurations and security requirements.</p>
                <p>With our gate automation systems, you can enjoy the convenience of remote control operation, eliminating the need for manual gate opening and closing. We provide user-friendly control interfaces, such as keypads, remote controls, or even integration with mobile applications, allowing for effortless access control.</p>
                <p>Our experienced technicians handle the entire installation process, ensuring proper placement, alignment, and calibration of all system components. We also provide comprehensive training and support to ensure that you are familiar with the operation and maintenance of your gate automation system.</p>
                <p>Whether you need a gate automation system for a residential complex, commercial property, or industrial facility, LeuNet ICT Solutions has the expertise to deliver a customized solution that meets your specific requirements. With our gate automation systems, you can enhance security, streamline access control, and enjoy the convenience of automated gate operations.</p>`,
      },
      {
        id: 3,
        img: BMS,
        title: "Building Management System",
        shortDesc:
          "LLeuNet ICT Solutions specializes in the design, implementation, and integration of Building Management Systems (BMS) to efficiently monitor, control, and optimize the various systems within a building. Our BMS solutions provide centralized management of critical building systems, including HVAC (heating, ventilation, and air conditioning), lighting, security, fire safety, and energy management.",
        desc: `With our Building Management Systems, you can gain complete visibility and control over your building's operations. Our experienced team conducts a thorough assessment of your building's infrastructure and requirements to develop a customized BMS design that aligns with your specific needs.
                <p>Our BMS solutions integrate advanced technologies, such as sensors, controllers, and smart devices, to collect real-time data from different systems within the building. This data is then processed and analyzed to enable intelligent decision-making and automated control of various building systems.</p>
                <p>Through our BMS, you can achieve energy efficiency and cost savings by optimizing HVAC operations, implementing demand-based lighting controls, and monitoring and analyzing energy consumption patterns. The system enables you to proactively identify and address energy inefficiencies and equipment malfunctions, reducing energy waste and enhancing sustainability.</p>
                <p>LeuNet ICT Solutions prioritizes user-friendly interfaces and intuitive dashboards, allowing you to easily navigate and manage your BMS. We also provide comprehensive training and ongoing support to ensure you maximize the benefits of the system.</p>`,
      },
      {
        id: 4,
        img: SAT,
        title: "Cable and Satellite TV Supply and Installation",
        shortDesc:
          "LeuNet ICT Solutions offers comprehensive cable and satellite TV supply and installation services to provide high-quality entertainment options for residential and commercial properties. Our team of experts is well-versed in the latest technologies and industry standards, ensuring seamless integration and optimal performance of cable and satellite TV systems.",
        desc: `We collaborate with leading cable TV providers to offer a wide range of cable TV packages tailored to your preferences and requirements. Whether you need basic channels, premium sports packages, or international channels, we can assist you in selecting the right cable TV subscription for your needs.
                <p>Our experienced technicians handle the entire cable TV installation process, including the setup of the cable TV infrastructure, such as wiring and connectors, and the installation of set-top boxes and equipment. We ensure proper signal strength and quality throughout your premises to deliver a reliable and uninterrupted cable TV experience.</p>
                <p>For those seeking a broader range of channels and international programming, our satellite TV supply and installation services are an excellent option. We work with renowned satellite TV providers to offer a diverse selection of satellite TV packages.</p>
                <p>At LeuNet ICT Solutions, we understand the importance of a reliable and high-quality TV experience. We strive to deliver efficient and professional cable and satellite TV supply and installation services, ensuring that you have access to a wide range of channels and entertainment options. Our team is committed to providing exceptional customer service and ongoing support to ensure your continued satisfaction with your cable or satellite TV system.</p>`,
      },
      {
        id: 5,
        img: PBXSYS,
        title: "Supply and Installation IP PBX Systems",
        shortDesc:
          "LeuNet ICT Solutions is a trusted provider of IP PBX (Internet Protocol Private Branch Exchange) systems, offering comprehensive supply and installation services tailored to meet the communication needs of businesses and organizations. Our IP PBX systems leverage the power of the internet to enable efficient and cost-effective voice communication within your premises and beyond.",
        desc: `We partner with industry-leading manufacturers to supply a wide range of IP PBX systems that cater to businesses of all sizes and requirements. Our team works closely with you to understand your communication needs, including the number of users, call volume, and desired features. Based on this information, we recommend the most suitable IP PBX system that aligns with your specific needs and budget.
                <p>Our IP PBX systems offer advanced features such as call routing, call forwarding, voicemail, auto-attendant, conference calling, and integration with other communication channels like email and instant messaging. We ensure that the IP PBX system we supply meets your functional requirements and supports future scalability.</p>
                <p>Our skilled technicians handle the installation process with precision and expertise. They assess your premises to determine the optimal placement of equipment and connectivity requirements. They install and configure the IP PBX server, IP phones, and any additional components necessary for your specific setup.</p>
                <p>At LeuNet ICT Solutions, we understand that effective communication is crucial for the success of your business. That's why we are committed to delivering top-quality IP PBX systems and professional installation services. With our expertise, you can enjoy enhanced communication capabilities, improved productivity, and cost savings.</p>`,
      },
    ],
  },
  {
    id: 4,
    thumbnail: img_4,
    img: Ict,
    title: "ICT Consultancy",
    shortDesc:
      "LeuNet ICT Solutions offers comprehensive ICT consultancy services to help businesses and organizations leverage technology effectively to achieve their goals. Our experienced consultants work closely with clients to understand their unique challenges and objectives, providing tailored strategies and recommendations to optimize their ICT infrastructure and operations.",
    desc: " LeuNet ICT Solutions offers comprehensive ICT consultancy services to help businesses and organizations leverage technology effectively to achieve their goals. Our experienced consultants work closely with clients to understand their unique challenges and objectives, providing tailored strategies and recommendations to optimize their ICT infrastructure and operations. Our ICT consultancy services cover a wide range of areas, including:",
    childServices: [
      {
        id: 1,
        img: Virtual,
        title: "IT Virtual Consultancy",
        shortDesc:
          "LeuNet ICT Solutions offers IT virtual consultancy services to assist businesses and organizations remotely with their technology needs and challenges. Our virtual consultancy services provide a flexible and convenient way to access expert advice and guidance without the need for on-site visits.",
        desc: `Through virtual consultations, our experienced IT consultants can address a wide range of IT-related topics and provide tailored solutions based on your specific requirements. Whether you need assistance with technology planning, system integration, cybersecurity, cloud computing, or any other IT-related area, our virtual consultancy services can help.
                <p>We begin by understanding your business goals, challenges, and technology landscape through detailed discussions and assessments. This helps us gain insights into your specific needs and requirements.</p>
                <p>Our IT consultants conduct virtual consultation sessions via video conferencing or phone calls. During these sessions, we discuss your IT concerns, answer your questions, and provide expert advice and recommendations.</p>
                <p>Following each virtual consultation session, we provide comprehensive documentation and reports summarizing the discussions, recommendations, and action steps. These documents serve as valuable references for you to implement the suggested solutions.</p>
                <p>Our virtual consultancy services extend beyond the consultation sessions. We offer ongoing support via email or virtual meetings to address any follow-up questions or concerns you may have, ensuring that you receive continuous assistance throughout the implementation process.</p>`,
      },
      {
        id: 2,
        img: Onsite,
        title: "On-site Consultancy and Support",
        shortDesc:
          "LeuNet ICT Solutions offers on-site consultancy and support services to provide personalized assistance and expertise directly at your business location. Our team of experienced IT professionals is available to visit your premises and work closely with you to address your specific technology needs and challenges.",
        desc: `Our on-site consultancy services involve a thorough assessment of your existing IT infrastructure, systems, and processes. We collaborate closely with your team to understand your business goals and objectives, allowing us to tailor our recommendations and solutions to meet your unique requirements. Whether you need assistance with technology planning, system design, network optimization, or any other IT-related area, our consultants will provide expert advice and guidance.
                <p>Our on-site consultancy services may include:</p>
               <li>Infrastructure Assessment: We evaluate your current IT infrastructure, including servers, networks, and hardware components, to identify areas for improvement and optimization.</li>
               <li>System Integration: Our consultants assist in integrating disparate systems and technologies, ensuring smooth interoperability and seamless data flow between different IT systems.</li>
               <li>Security Audit: We conduct a comprehensive security audit to identify vulnerabilities and develop robust security measures to protect your IT environment from potential threats.</li>
               <li>Technology Upgrades: We help you identify opportunities for technology upgrades or enhancements, recommending suitable solutions that align with your budget and business objectives.</li>
               <p>With our on-site consultancy and support services, we aim to provide you with a comprehensive and personalized IT experience. Our dedicated team will work closely with you to ensure that your technology infrastructure is optimized, secure, and aligned with your business goals.</p>`,
      },
    ],
  },
];

export default DataServices;
