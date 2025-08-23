import { LegalTopic, LegalQuestion } from '../types';

export const legalTemplateButton: LegalTemplate[] = [
  {
    id: '1',
    name: 'Constitutional Law',
    description: 'Laws related to fundamental rights, judicial review, and government structure',
    subtopics: [
      'Fundamental rights and freedoms',
      'Judicial review',
      'Constitutional amendments',
      'Center-state relations'
    ]
  },
  {
    id: '2',
    name: 'Criminal Law',
    description: 'Laws related to crimes, punishments, and criminal procedures',
    subtopics: [
      'Offenses and penalties',
      'Criminal procedures',
      'Bail and anticipatory bail',
      'Evidence and witnesses'
    ]
  },
  {
    id: '3',
    name: 'Civil Law',
    description: 'Laws governing private rights and remedies',
    subtopics: [
      'Contracts and agreements',
      'Property rights and disputes',
      'Tort claims and liabilities',
      'Debt recovery and bankruptcy'
    ]
  },
  {
    id: '4',
    name: 'Family Law',
    description: 'Laws related to family relationships and domestic matters',
    subtopics: [
      'Marriage, divorce, and separation',
      'Child custody and support',
      'Adoption and guardianship',
      'Maintenance and alimony'
    ]
  },
  {
    id: '5',
    name: 'Labor and Employment Law',
    description: 'Laws governing employer-employee relationships',
    subtopics: [
      'Employment contracts',
      'Workplace harassment',
      'Wage and hour regulations',
      'Employment termination'
    ]
  },
  {
    id: '6',
    name: 'Intellectual Property Law',
    description: 'Laws protecting creative works, inventions, and business identities',
    subtopics: [
      'Copyrights and trademarks',
      'Patent registration and protection',
      'Trade secrets and confidential information',
      'Intellectual property infringement'
    ]
  },
  {
    id: '7',
    name: 'Commercial Law',
    description: 'Laws governing business and commercial transactions',
    subtopics: [
      'Company formation and registration',
      'Contractual disputes',
      'Corporate governance',
      'Mergers and acquisitions'
    ]
  },
  {
    id: '8',
    name: 'Tax Law',
    description: 'Laws related to taxation and revenue collection',
    subtopics: [
      'Income tax regulations',
      'Goods and Services Tax (GST)',
      'Tax planning and exemptions',
      'Tax disputes and appeals'
    ]
  },
  {
    id: '9',
    name: 'Real Estate Law',
    description: 'Laws governing property ownership, transfer, and development',
    subtopics: [
      'Property purchase and sale agreements',
      'Landlord-tenant disputes',
      'Property registration and titles',
      'Development and construction regulations (RERA)'
    ]
  },
  {
    id: '10',
    name: 'Consumer Law',
    description: 'Laws protecting consumer rights and interests',
    subtopics: [
      'Consumer rights and protections',
      'Product liability',
      'Unfair trade practices',
      'Consumer disputes and redressal'
    ]
  },
  {
    id: '11',
    name: 'Banking and Finance Law',
    description: 'Laws regulating financial institutions and transactions',
    subtopics: [
      'Banking regulations',
      'Loan agreements and securities',
      'Debt recovery and insolvency',
      'Financial fraud and scams'
    ]
  },
  {
    id: '12',
    name: 'Environmental Law',
    description: 'Laws protecting the environment and natural resources',
    subtopics: [
      'Pollution control and prevention',
      'Conservation of natural resources',
      'Environmental impact assessments',
      'Forest and wildlife protection'
    ]
  },
  {
    id: '13',
    name: 'Administrative Law',
    description: 'Laws governing administrative agencies and government actions',
    subtopics: [
      'Government decision-making processes',
      'Administrative tribunals',
      'Right to information',
      'Judicial review of administrative actions'
    ]
  },
  {
    id: '14',
    name: 'Cyber Law',
    description: 'Laws governing electronic communications and digital activities',
    subtopics: [
      'Data protection and privacy',
      'Cybercrime and cybersecurity',
      'Electronic contracts and transactions',
      'Social media and online defamation'
    ]
  }
];




export const commonLegalQuestions: LegalQuestion[] = [
  {
    id: '1',
    question: 'What are the grounds for divorce in India?',
    topicId: '4',
    answer: `In India, divorce can be obtained under various personal laws depending on the religion of the parties involved. Under the Hindu Marriage Act, 1955 (applicable to Hindus, Buddhists, Jains, and Sikhs), the grounds for divorce include:

1. **Adultery**: When the spouse has voluntary sexual intercourse with someone else after marriage.
2. **Cruelty**: Mental or physical cruelty that makes it impossible to live together.
3. **Desertion**: When one spouse has deserted the other for a continuous period of at least two years.
4. **Conversion**: If one spouse converts to another religion.
5. **Mental Disorder**: If the spouse suffers from incurable mental disorder or continuous/intermittent mental illness.
6. **Communicable Disease**: If the spouse suffers from a virulent and incurable form of leprosy or venereal disease.
7. **Renunciation**: If the spouse has renounced the world by entering religious orders.
8. **Presumption of Death**: If the spouse has not been heard of as being alive for seven years or more.
9. **Mutual Consent**: Both parties agree to dissolve the marriage.
10. **Non-resumption of Cohabitation**: After a decree of judicial separation, if cohabitation is not resumed for one year or more.

For Muslims, divorce is governed by Muslim personal law, while Christians follow the Indian Divorce Act, 1869, and Parsis follow the Parsi Marriage and Divorce Act, 1936. The Special Marriage Act, 1954 applies to all citizens regardless of religion for civil marriages.

The process typically involves filing a petition in the family court having jurisdiction, followed by court proceedings that may include counseling, evidence presentation, and final judgment.`
  },
  {
    id: '2',
    question: 'How can I protect my intellectual property rights?',
    topicId: '6',
    answer: `Protecting your intellectual property rights in India involves several mechanisms depending on the type of intellectual property:

1. **Trademarks**:
   - File an application with the Controller General of Patents, Designs and Trademarks
   - Registration is valid for 10 years and can be renewed indefinitely
   - Use the ® symbol for registered trademarks and ™ for unregistered ones

2. **Patents**:
   - File a patent application with the Indian Patent Office
   - Patents in India are granted for 20 years from the date of filing
   - Maintain confidentiality before filing; public disclosure can invalidate your application

3. **Copyrights**:
   - Copyright protection is automatic upon creation of original works
   - Registration with the Copyright Office provides stronger evidence of ownership
   - Copyright generally lasts for the author's lifetime plus 60 years

4. **Trade Secrets**:
   - Implement confidentiality agreements (NDAs) with employees and business partners
   - Establish internal security protocols to protect sensitive information
   - Limit access to confidential information on a need-to-know basis

5. **Industrial Designs**:
   - Register with the Design Office for protection of the aesthetic aspects of products
   - Protection lasts for 10 years, extendable for another 5 years

6. **Enforcement Strategies**:
   - Monitor the market for potential infringements
   - Send cease and desist letters to infringers
   - File civil suits for injunctions and damages
   - Report counterfeiting to police for criminal action

7. **Digital Protection**:
   - Use digital rights management (DRM) tools
   - Implement watermarks on digital content
   - Register domain names related to your brand

8. **International Protection**:
   - Consider filing under the Madrid Protocol for international trademark protection
   - Use the Patent Cooperation Treaty (PCT) for international patent applications
   - India is a signatory to major IP conventions including TRIPS, Berne Convention, and Paris Convention

Consulting with an intellectual property attorney is highly recommended to develop a comprehensive protection strategy tailored to your specific needs.`
  } ,
  {
    id: '3',
    question: 'What are the legal requirements for starting a business in India?',
    topicId: '7',
    answer: `# Legal Requirements for Starting a Business in India

## Business Structure Selection
First, choose the appropriate business structure:
- **Sole Proprietorship**: Simplest form, minimal compliance requirements
- **Partnership Firm**: Governed by the Partnership Act, 1932
- **Limited Liability Partnership (LLP)**: Combines benefits of partnership and company
- **Private Limited Company**: Most popular for startups and SMEs
- **One Person Company (OPC)**: Single person company with limited liability
- **Public Limited Company**: For larger businesses seeking public investment

## Registration Process
Depending on the structure chosen:

### For Private Limited Company/OPC:
1. Obtain Digital Signature Certificate (DSC)
2. Apply for Director Identification Number (DIN)
3. Reserve unique company name on MCA portal
4. File incorporation documents (MOA, AOA) with Registrar of Companies
5. Obtain Certificate of Incorporation
6. Apply for PAN and TAN

### For LLP:
1. Obtain Digital Signature Certificate
2. Apply for DPIN (Designated Partner Identification Number)
3. Reserve LLP name
4. File LLP Agreement
5. Obtain LLP Registration Certificate

### For Partnership:
1. Draft Partnership Deed
2. Register with Registrar of Firms (optional but recommended)

### For Sole Proprietorship:
1. No mandatory registration, but can register trade name

## Post-Registration Compliances
1. **GST Registration**: Mandatory if turnover exceeds ₹40 lakhs (₹20 lakhs for some states)
2. **Professional Tax Registration**: Required in states that levy professional tax
3. **ESI & PF Registration**: Mandatory if employing 10+ employees (20+ for some establishments)
4. **MSME Registration**: Optional but beneficial for small businesses
5. **Shop & Establishment License**: Required for premises with commercial activities
6. **Industry-Specific Licenses**: Based on business activity (e.g., FSSAI for food business)

## Banking Requirements
1. Open business bank account
2. Set up accounting systems

## Taxation Compliance
1. File regular GST returns (monthly/quarterly)
2. File annual income tax returns
3. Maintain proper books of accounts

## Labor Law Compliance
1. Display labor law notices at workplace
2. Maintain statutory registers
3. Comply with minimum wage requirements

## Annual Compliance
1. File annual returns with ROC (for companies and LLPs)
2. Hold annual general meetings (for companies)
3. Conduct statutory audit if applicable

Consulting with a chartered accountant and legal advisor is recommended to ensure complete compliance with all applicable laws and regulations.`
  },
  {
    id: '4',
    question: 'Can I file a consumer complaint against a company for faulty products?',
    topicId: '10',
    answer: `# Filing a Consumer Complaint for Faulty Products in India

Yes, you can file a consumer complaint against a company for faulty products under the Consumer Protection Act, 2019, which replaced the earlier Consumer Protection Act, 1986. The new act provides enhanced protection to consumers and streamlines the complaint process.

## Grounds for Complaint
You can file a complaint if you've experienced:
- Defective products
- Poor quality goods
- Products not matching description
- Unfair trade practices
- Overcharging beyond MRP
- Products causing harm or injury

## Where to File a Complaint
The Consumer Protection Act, 2019 establishes a three-tier quasi-judicial mechanism:

1. **District Consumer Disputes Redressal Commission (District Commission)**
   - For complaints where value of goods/services and compensation claimed is up to ₹1 crore
   
2. **State Consumer Disputes Redressal Commission (State Commission)**
   - For complaints where value is between ₹1 crore and ₹10 crores
   - Appeals against District Commission orders
   
3. **National Consumer Disputes Redressal Commission (National Commission)**
   - For complaints where value exceeds ₹10 crores
   - Appeals against State Commission orders

## How to File a Complaint

### Step 1: Send a Notice to the Company
Before filing a formal complaint, send a written notice to the company detailing the issue and seeking redressal.

### Step 2: Gather Evidence
Collect and organize:
- Purchase receipt/invoice
- Warranty card
- Product packaging
- Photographs of the defective product
- Communication with the company
- Expert opinions (if applicable)

### Step 3: Draft the Complaint
Your complaint should include:
- Your name, address, and contact details
- Details of the opposite party (company)
- Description of the product and defect
- Date of purchase
- Details of the issue faced
- Steps taken to resolve with the company
- Relief sought (refund, replacement, compensation)

### Step 4: File the Complaint
- Submit the complaint to the appropriate Consumer Commission based on the value
- Pay the nominal filing fee
- You can file in person or through an authorized representative
- Online filing is also available through the e-daakhil portal (https://edaakhil.nic.in)

### Step 5: Attend Hearings
- Appear for hearings as scheduled
- Present your case with evidence
- You can represent yourself or hire a lawyer

## Time Limit
A complaint must be filed within 2 years from the date on which the cause of action arose.

## Online Complaint Options
1. **National Consumer Helpline**: Call 1800-11-4000 or file online at www.consumerhelpline.gov.in
2. **E-daakhil Portal**: For online filing of complaints
3. **INGRAM Portal**: Integrated Grievance Redress Mechanism (consumerhelpline.gov.in)

## Remedies Available
The Consumer Commission can direct the company to:
- Remove the defect from the goods
- Replace the goods
- Refund the price paid
- Pay compensation for loss or injury suffered
- Discontinue unfair trade practices
- Pay punitive damages in appropriate cases

The Consumer Protection Act, 2019 also introduced the concept of product liability, making manufacturers and sellers liable for any harm caused by defective products.`
  } ,
  {
    id: '5',
    question: 'What are the rights and responsibilities of tenants and landlords in India?',
    topicId: '9',
    answer: `# Rights and Responsibilities of Tenants and Landlords in India

India's rental laws vary by state, with many states having enacted their own Rent Control Acts. Additionally, the Model Tenancy Act, 2021 was introduced as a framework for states to adopt or adapt. Below are the general rights and responsibilities applicable in most jurisdictions:

## Landlord's Rights

1. **Receive Rent**: Right to receive timely rent as agreed in the rental agreement
2. **Security Deposit**: Right to collect and hold a security deposit
3. **Property Inspection**: Right to inspect the property with reasonable notice
4. **Eviction**: Right to evict tenants on legal grounds such as:
   - Non-payment of rent
   - Subletting without permission
   - Using premises for illegal activities
   - Causing substantial damage to property
   - Expiry of lease period (with proper notice)
5. **Rent Revision**: Right to revise rent periodically as per agreement or state laws
6. **Property Alterations**: Right to refuse permanent alterations to the property

## Landlord's Responsibilities

1. **Habitable Premises**: Provide and maintain premises in habitable condition
2. **Essential Services**: Ensure availability of essential services like water and electricity
3. **Repairs**: Undertake structural repairs and maintenance
4. **Privacy**: Respect tenant's privacy and provide notice before visits
5. **Legal Compliance**: Register the rental agreement where required by law
6. **Security Deposit Refund**: Return security deposit promptly after lease termination (minus legitimate deductions)
7. **Receipts**: Provide rent receipts for payments received

## Tenant's Rights

1. **Peaceful Possession**: Right to peaceful possession and use of the rented premises
2. **Essential Services**: Right to essential services and basic amenities
3. **Privacy**: Right to privacy and advance notice before landlord's visit
4. **Repairs**: Right to request necessary repairs and maintenance
5. **Security Deposit**: Right to refund of security deposit upon vacating (minus legitimate deductions)
6. **Notice Period**: Right to proper notice before eviction as per agreement or law
7. **Rent Receipts**: Right to receive rent receipts for payments made

## Tenant's Responsibilities

1. **Timely Rent**: Pay rent on time as specified in the agreement
2. **Proper Use**: Use the premises for the purpose mentioned in the agreement
3. **Maintenance**: Maintain the property in good condition and avoid damage
4. **No Unauthorized Alterations**: Not make permanent structural changes without permission
5. **No Illegal Activities**: Not use the premises for illegal activities
6. **No Unauthorized Subletting**: Not sublet without landlord's permission
7. **Notice for Vacating**: Provide notice before vacating as per agreement
8. **Utility Bills**: Pay utility bills as agreed in the rental agreement

## Rental Agreement Best Practices

1. **Written Agreement**: Always have a written rental agreement
2. **Clear Terms**: Clearly specify rent amount, security deposit, duration, and notice period
3. **Inventory List**: Maintain an inventory of fixtures and fittings with condition noted
4. **Registration**: Register the rental agreement where required by state law
5. **Witnesses**: Have the agreement signed in the presence of witnesses
6. **Stamp Duty**: Pay appropriate stamp duty as per state regulations

## Dispute Resolution

1. **Negotiation**: Attempt to resolve disputes through direct communication
2. **Mediation**: Seek third-party mediation services
3. **Rent Authority**: Approach the Rent Authority where established
4. **Civil Court**: File a case in civil court for disputes not resolved otherwise

Remember that specific provisions may vary based on state laws and local regulations. It's advisable to consult a legal expert familiar with the rental laws of your specific state.`
  },
  {
    id: '6',
    question: 'What is the process for obtaining a trademark registration in India?',
    topicId: '6',
    answer: `# Trademark Registration Process in India

Trademark registration in India is governed by the Trade Marks Act, 1999 and the Trade Marks Rules, 2017. The process is administered by the Controller General of Patents, Designs and Trade Marks under the Department for Promotion of Industry and Internal Trade (DPIIT).

## Pre-Filing Steps

### 1. Trademark Search
- Conduct a comprehensive search on the Trademark Registry database (https://ipindiaonline.gov.in/tmrpublicsearch)
- Check for identical or similar existing marks in relevant classes
- Consider hiring a trademark attorney for a thorough search

### 2. Determine Trademark Class
- Identify the appropriate class(es) from the 45 classes under the Nice Classification
- Classes 1-34 are for goods
- Classes 35-45 are for services
- Multiple classes can be covered in a single application with additional fees

## Filing Process

### 3. Prepare Application
Choose the appropriate form:
- **Form TM-A**: For individual/startup/small enterprise applicants
- **Form TM-M**: For convention application (claiming priority from foreign application)
- **Form TM-O**: For collective marks
- **Form TM-R**: For certification marks

Required information includes:
- Applicant details
- Representation of the mark
- Goods/services description
- Use details (proposed use or date of first use)
- Priority details (if applicable)

### 4. Submit Application
- File online through the Intellectual Property India portal (https://ipindia.gov.in)
- Pay the prescribed fee (₹4,500 for individuals/startups/small enterprises per class, ₹9,000 for others per class)
- Receive acknowledgment with application number

## Examination Process

### 5. Examination
- The Registrar examines the application (typically within 3-6 months)
- Checks for absolute and relative grounds of refusal
- Issues Examination Report stating objections (if any)

### 6. Respond to Examination Report
- If objections are raised, file a response within 1 month (extendable by 1 month)
- Submit arguments and evidence to overcome objections
- Attend hearing if required

## Publication and Registration

### 7. Publication in Trademark Journal
- If accepted, the mark is published in the Trademark Journal
- This begins a 4-month opposition period

### 8. Opposition Period
- Third parties can file opposition within 4 months of publication
- If opposed, both parties present their case before the Registrar
- Opposition proceedings can take 1-2 years

### 9. Registration
- If no opposition is filed or opposition is decided in applicant's favor
- Registration certificate is issued
- Trademark is valid for 10 years from application date

## Post-Registration

### 10. Renewal
- Renewable every 10 years by paying renewal fee
- Can be renewed 6 months before expiry
- Grace period of 6 months after expiry (with additional fee)

### 11. Use Requirement
- Trademark must be used in relation to the registered goods/services
- Non-use for 5 continuous years can make it vulnerable to cancellation

## Timeline and Costs

- **Total timeline**: 18-24 months without opposition
- **Official fees**: ₹4,500-9,000 per class (plus professional fees if using an attorney)
- **Renewal fee**: ₹9,000 per class

## Benefits of Registration

- Exclusive right to use the mark
- Right to sue for infringement
- Use of ® symbol
- Asset for licensing and franchising
- Protection against counterfeiting

It's advisable to engage a trademark attorney for professional assistance throughout the process, especially for handling objections and oppositions.`
  },
  {
    id: '7',
    question: 'What are the legal implications of a hit-and-run accident?',
    topicId: '2',
    answer: `# Legal Implications of Hit-and-Run Accidents in India

A hit-and-run accident occurs when a driver involved in an accident flees the scene without stopping to identify themselves, render aid, or report the accident to authorities. In India, this is considered a serious offense with significant legal consequences.

## Criminal Liability

### Under the Motor Vehicles Act, 1988 (as amended in 2019)

1. **Section 134**: Requires the driver to:
   - Stop and remain at the scene
   - Provide information (name, address, vehicle details)
   - Take injured persons to the nearest hospital

2. **Section 187**: Punishment for fleeing the scene
   - Imprisonment up to 3 months, or
   - Fine up to ₹5,000, or both
   - For first offense

3. **Section 134(1A)**: Enhanced penalties for serious accidents
   - Imprisonment up to 6 months, or
   - Fine up to ₹10,000, or both

### Under the Indian Penal Code (IPC)

1. **Section 279**: Rash driving
   - Imprisonment up to 6 months, or
   - Fine up to ₹1,000, or both

2. **Section 304A**: Causing death by negligence
   - Imprisonment up to 2 years, or
   - Fine, or both

3. **Section 338**: Causing grievous hurt by endangering life
   - Imprisonment up to 2 years, or
   - Fine up to ₹5,000, or both

4. **Section 201**: Destruction of evidence
   - If capital offense: Imprisonment up to 7 years and fine
   - Other cases: Imprisonment up to 3 years and fine

## Civil Liability

1. **Motor Accident Claims Tribunal (MACT)**
   - Victim can file claim for compensation
   - Based on principle of "no-fault liability"
   - Compensation calculated based on:
     - Medical expenses
     - Loss of income/earning capacity
     - Pain and suffering
     - Loss of consortium (for spouse)
     - Loss of care and guidance (for children)

2. **Insurance Claims**
   - Third-party insurance is mandatory in India
   - Insurance company liable to pay compensation
   - Can later recover from the insured if terms were violated

## Investigation Process

1. **FIR Registration**
   - Police register First Information Report
   - Investigation begins to identify the vehicle and driver

2. **Evidence Collection**
   - CCTV footage
   - Witness statements
   - Vehicle parts left at scene
   - Forensic evidence

3. **Vehicle and Driver Identification**
   - RTO records
   - Vehicle tracking
   - Call detail records
   - Technical surveillance

## Consequences for the Driver

1. **Arrest and Prosecution**
   - Criminal charges as applicable
   - Possible preventive detention in serious cases

2. **Driving License**
   - Suspension or cancellation
   - Disqualification from holding license

3. **Vehicle Seizure**
   - Vehicle may be impounded as evidence
   - May be confiscated in certain cases

4. **Financial Liability**
   - Personal liability for compensation
   - Insurance premium increase
   - Possible rejection of insurance claim

## Rights of Victims

1. **Compensation**
   - Right to claim compensation through MACT
   - Interim compensation in serious injury/death cases

2. **Free Medical Treatment**
   - Right to immediate medical aid at nearest hospital
   - Government hospitals cannot refuse treatment

3. **Legal Aid**
   - Free legal services through Legal Services Authority

## Preventive Measures

1. **Good Samaritan Protection**
   - Ministry of Road Transport guidelines protect those who help accident victims
   - No civil or criminal liability for good faith assistance
   - Not obligated to disclose identity or personal details

2. **Emergency Response**
   - Dial 108 for ambulance
   - Dial 100 for police
   - Use highway emergency call boxes where available

Hit-and-run cases are treated seriously by Indian courts, with an increasing trend toward stricter penalties, especially in cases resulting in death or serious injury.`
  },
  {
    id: '8',
    question: 'How can I claim compensation for a workplace injury?',
    topicId: '5',
    answer: `# Claiming Compensation for Workplace Injury in India

Workplace injuries in India are primarily governed by two key legislations: the Employees' Compensation Act, 1923 (formerly Workmen's Compensation Act) and the Employees' State Insurance Act, 1948. The process for claiming compensation depends on whether you are covered under the ESI scheme or not.

## For Employees Covered Under ESI Scheme

### Eligibility
- Employees earning up to ₹21,000 per month
- Working in establishments with 10 or more employees (20 in some states)
- Registered under the ESI scheme with contributions being paid

### Process for Claiming Compensation

1. **Medical Treatment**
   - Seek immediate medical attention at an ESI hospital/dispensary
   - If emergency, treatment can be taken at any hospital and later reimbursed

2. **Accident Report**
   - Ensure the accident is reported to the employer immediately
   - Employer must report to ESIC within 24 hours

3. **Medical Certification**
   - Obtain Temporary Disablement Certificate from ESI doctor
   - For permanent disability, assessment by Medical Board

4. **File Claim**
   - Submit Form 8 for temporary disablement benefit
   - Submit Form 14 for permanent disablement benefit
   - Submit Form 23 for dependents' benefit (in case of death)

5. **Supporting Documents**
   - ESI card/number
   - Medical certificates
   - Accident report
   - Employment details
   - Bank account details

### Benefits Available
- **Medical Benefit**: Full medical care at ESI hospitals/dispensaries
- **Temporary Disablement Benefit**: 90% of wages for the period of disablement
- **Permanent Disablement Benefit**: Monthly payment based on loss of earning capacity
- **Dependents' Benefit**: 90% of wages to dependents in case of death
- **Funeral Expenses**: Fixed amount for funeral expenses

## For Employees NOT Covered Under ESI Scheme

### Process Under Employees' Compensation Act

1. **Medical Treatment**
   - Seek immediate medical treatment
   - Preserve all medical records and bills

2. **Notify Employer**
   - Inform employer about the accident in writing
   - Notice should be given as soon as practicable

3. **File Claim Application**
   - Submit claim to the Commissioner for Employees' Compensation
   - Application must be filed within 2 years of the accident

4. **Supporting Documents**
   - Medical certificates and reports
   - Treatment bills and expenses
   - Salary/wage details
   - Accident report
   - Witness statements (if available)

5. **Hearing and Assessment**
   - Commissioner conducts hearings
   - May order medical examination
   - Determines compensation amount

### Compensation Calculation
- For death: 50% of monthly wages × relevant factor (based on age) or ₹1,20,000, whichever is higher
- For permanent total disablement: 60% of monthly wages × relevant factor or ₹1,40,000, whichever is higher
- For permanent partial disablement: Percentage of disability × compensation for total disablement
- For temporary disablement: 25% of monthly wages every two weeks

## Alternative Remedies

### Civil Suit for Negligence
- Can file civil suit claiming damages if injury resulted from employer's negligence
- Higher compensation possible but longer process
- Must prove negligence

### Criminal Complaint
- If injury resulted from criminal negligence or violation of safety laws
- File complaint under relevant sections of IPC
- Can be pursued alongside compensation claim

## Important Considerations

1. **Time Limitations**
   - ESI claims: Within 1 year of accident
   - Employees' Compensation Act: Within 2 years of accident

2. **Legal Assistance**
   - Consider consulting a labor law attorney
   - Trade unions can provide assistance
   - Legal Services Authority offers free legal aid

3. **No Termination Protection**
   - Employer cannot terminate employment during period of disability
   - Protected under Industrial Disputes Act

4. **Occupational Diseases**
   - Compensation also available for occupational diseases
   - Listed in Schedule III of both Acts

5. **Appeal Process**
   - Appeals against Commissioner's order to High Court
   - Must be filed within 60 days

Seeking prompt medical attention and reporting the accident immediately are crucial steps for successful compensation claims. Proper documentation of the injury, treatment, and expenses significantly strengthens your case.`
  },
  {
    id: '9',
    question: 'What are the legal options for resolving a property dispute with a family member?',
    topicId: '3',
    answer: `# Legal Options for Resolving Property Disputes with Family Members

Property disputes among family members are common in India and can arise from various situations including inheritance issues, partition of ancestral property, disputed wills, or unauthorized possession. Here are the legal options available for resolving such disputes:

## 1. Negotiation and Family Settlement

### Advantages
- Preserves family relationships
- Cost-effective and quick
- Flexible solutions possible
- Confidential process

### Process
1. Organize a family meeting with all concerned parties
2. Discuss grievances and expectations openly
3. Document the agreed terms in a "Family Settlement Agreement"
4. Have the agreement notarized
5. Register the agreement if it involves immovable property

## 2. Mediation

### Advantages
- Structured negotiation with neutral third party
- Less adversarial than court litigation
- Confidential proceedings
- Faster resolution than courts

### Process
1. Appoint a mediator (lawyer, retired judge, or professional mediator)
2. Present respective positions to the mediator
3. Mediator facilitates discussion and negotiation
4. If settlement reached, draft a mediation settlement agreement
5. Register the agreement if it involves immovable property

## 3. Civil Litigation

### Types of Suits
- **Partition Suit**: For division of jointly owned property
- **Suit for Declaration of Title**: To establish ownership rights
- **Suit for Specific Performance**: To enforce property agreements
- **Suit for Injunction**: To prevent interference with property
- **Suit for Possession**: To recover property from unauthorized occupation

### Process
1. File a plaint in the civil court having jurisdiction
2. Court issues summons to the opposite party
3. Defendant files written statement (defense)
4. Evidence stage (documents and witnesses)
5. Arguments
6. Judgment and decree

### Jurisdiction
- **Pecuniary Jurisdiction**: Based on property value
- **Territorial Jurisdiction**: Where property is situated

### Limitation Period
- 12 years for suits related to immovable property
- 3 years for suits related to movable property
- Time starts from when the right to sue first accrues

## 4. Alternative Dispute Resolution

### Arbitration
- Parties appoint arbitrator(s) to adjudicate the dispute
- Binding decision (award)
- Less formal than court proceedings
- Faster resolution
- Limited grounds for appeal

### Lok Adalat
- Organized by Legal Services Authorities
- Non-adversarial proceedings
- Award has status of civil court decree
- No appeal against award
- No court fees if matter settled

## 5. Specialized Tribunals

### Revenue Courts
- For agricultural land disputes
- Matters related to land records, boundaries, etc.
- Procedures vary by state

### Rent Control Tribunals
- For disputes between landlords and tenants
- Eviction matters
- Rent determination

## 6. Criminal Remedies (in specific cases)

### Criminal Complaints
- Under Section 447 IPC for trespass
- Under Section 425 IPC for mischief
- Under Section 406 IPC for criminal breach of trust

### Preventive Action
- Section 145 CrPC proceedings for disputes likely to cause breach of peace
- Executive Magistrate can attach property pending decision

## 7. Wills and Succession Disputes

### Probate Proceedings
- For proving validity of will
- Mandatory in certain jurisdictions for wills related to immovable property

### Letters of Administration
- When person dies intestate (without will)
- Court appoints administrator to distribute assets

## Important Considerations

1. **Documentation**
   - Collect all property documents (sale deeds, wills, tax receipts, etc.)
   - Obtain certified copies from registrar's office if originals not available

2. **Property Valuation**
   - Get professional valuation for fair division
   - Consider tax implications of property transfer

3. **Lis Pendens**
   - File notice of pending litigation to prevent property transfer during dispute

4. **Interim Remedies**
   - Temporary injunctions to maintain status quo
   - Appointment of receiver to manage property during litigation

5. **Succession Laws**
   - Hindu Succession Act for Hindus
   - Muslim Personal Law for Muslims
   - Indian Succession Act for Christians and others

6. **Legal Representation**
   - Consult property law specialist
   - Consider cost-benefit analysis of litigation

Property disputes can be emotionally draining and financially costly. Starting with negotiation or mediation is often advisable before resorting to litigation. Proper legal advice at an early stage can help identify the most appropriate resolution mechanism for your specific situation.`
  },
  {
    id: '10',
    question: 'What are the legal requirements for making a will in India?',
    topicId: '3',
    answer: `# Legal Requirements for Making a Will in India

A will is a legal document that allows a person (testator) to specify how their assets should be distributed after death. In India, wills are primarily governed by the Indian Succession Act, 1925, with specific provisions for different religious communities.

## Essential Requirements for a Valid Will

### 1. Legal Capacity of Testator
- Must be of sound mind
- Must be at least 18 years old
- Must not be under coercion or undue influence
- Must understand the nature and consequences of making a will

### 2. Formal Requirements
- Must be in writing (oral wills are recognized only in limited circumstances for soldiers and mariners)
- Should be dated (though not mandatory, highly advisable)
- Must be signed by the testator
- Signature must be placed in a manner indicating that it completes the will

### 3. Attestation Requirements
- Must be attested by at least two witnesses
- Each witness must have seen the testator sign the will
- Witnesses must sign in the presence of the testator
- Witnesses need not sign in each other's presence
- Witnesses should not be beneficiaries under the will

## Contents of a Will

### Essential Components
1. **Identification of Testator**: Full name, address, and occupation
2. **Declaration Clause**: Statement that this is the last will and testament
3. **Revocation Clause**: Revoking all previous wills and testamentary dispositions
4. **Appointment of Executors**: Naming person(s) responsible for executing the will
5. **Distribution of Assets**: Clear description of assets and beneficiaries
6. **Residuary Clause**: Disposition of assets not specifically mentioned
7. **Signature of Testator**: At the end of the will
8. **Attestation Clause**: Statement by witnesses confirming proper execution
9. **Signatures of Witnesses**: With names and addresses

### Optional Components
1. **Appointment of Guardians**: For minor children
2. **Specific Bequests**: Particular items to specific beneficiaries
3. **Trusts Creation**: For specific purposes or beneficiaries
4. **Funeral Instructions**: Though not legally binding, may be included

## Registration of Will

### Not Mandatory but Advantageous
- Registration is optional under Section 18 of the Registration Act, 1908
- Registered at the office of the Sub-Registrar where the testator resides
- Provides stronger evidence of authenticity
- Safer custody as original remains with registrar
- Difficult to tamper with or destroy

### Registration Process
1. Testator must appear in person before the Sub-Registrar
2. Present the will for registration
3. Acknowledge execution of the will
4. Pay registration fee
5. Will is copied into registration books
6. Original returned to testator with registration endorsement

## Probate and Letters of Administration

### Probate
- Court certification of will's authenticity
- Mandatory in Presidency towns (Kolkata, Mumbai, Chennai) for wills of Hindus, Buddhists, Sikhs, and Jains
- Optional elsewhere
- Conclusive proof of will's validity

### Letters of Administration
- Court authorization to administer estate
- Required when:
  - No executor is named in the will
  - Named executor refuses to act
  - Testator dies intestate (without a will)

## Religion-Specific Considerations

### Hindus, Buddhists, Sikhs, and Jains
- Governed by Indian Succession Act with modifications
- Can bequeath all self-acquired property freely
- Restrictions may apply to ancestral property under joint family system

### Muslims
- Governed by Muslim Personal Law
- Can only bequeath up to 1/3 of property to non-heirs
- Remaining 2/3 must devolve according to Islamic law of inheritance
- Bequest to legal heirs requires consent of other legal heirs

### Christians, Parsis, and Jews
- Fully governed by Indian Succession Act
- No religious restrictions on testamentary freedom

## Common Pitfalls to Avoid

1. **Ambiguous Language**: Use clear, specific terms to avoid misinterpretation
2. **Improper Attestation**: Ensure proper witnessing procedure
3. **Undue Influence**: Ensure will is made freely without pressure
4. **Outdated Will**: Review and update will periodically
5. **Incomplete Asset List**: Include comprehensive inventory of assets
6. **Ignoring Digital Assets**: Include provisions for digital assets and accounts
7. **Not Informing Executors**: Ensure executors know their appointment and location of will

## Safekeeping of Will

1. Keep original in secure location (bank locker, with attorney)
2. Inform executor or trusted person about location
3. Consider keeping a copy with your attorney
4. If registered, original can be deposited with registrar

## Revoking or Altering a Will

1. **By Making New Will**: Explicitly revoking previous wills
2. **By Codicil**: Formal amendment to existing will (must be executed like a will)
3. **By Destruction**: Physical destruction with intention to revoke
4. **By Marriage**: Marriage automatically revokes prior will (with exceptions)

It is highly advisable to consult a legal professional when drafting a will, especially for complex estates or family situations, to ensure it meets all legal requirements and effectively carries out your intentions.`
  },
  {
    id: '11',
    question: 'How can I file a complaint against online fraud or cybercrime?',
    topicId: '14',
    answer: `# Filing a Complaint Against Online Fraud or Cybercrime in India

Cybercrime and online fraud have become increasingly common in India. The government has established multiple channels to report and address these issues. Here's a comprehensive guide on how to file a complaint:

## Immediate Steps After Discovering Fraud

1. **Document Everything**
   - Take screenshots of fraudulent communications
   - Save transaction details, emails, messages
   - Note down websites, phone numbers, account details involved

2. **Contact Your Bank/Financial Institution**
   - Report fraudulent transactions immediately
   - Request to block your cards/accounts
   - File a dispute for unauthorized transactions
   - Ask for transaction reversal if possible

3. **Preserve Digital Evidence**
   - Do not delete any related emails or messages
   - Maintain call records
   - Keep copies of all communication with the fraudster

## Online Reporting Options

### 1. National Cyber Crime Reporting Portal
- Visit: https://cybercrime.gov.in
- Click on "Report Cyber Crime"
- Select appropriate category (financial fraud, social media, etc.)
- Provide required details and upload evidence
- You'll receive a complaint number for tracking
- Suitable for all types of cybercrimes

### 2. Cyber Crime Cells
- Most major cities have dedicated Cyber Crime Cells
- Visit the nearest Cyber Crime Cell in person
- Submit written complaint with supporting evidence
- Contact details available on state police websites

### 3. Online FIR
- Some states allow e-FIR filing through state police portals
- Visit your state police website
- Follow the e-FIR filing procedure
- Print acknowledgment for reference

### 4. Indian Cyber Crime Coordination Centre (I4C)
- For reporting major cyber incidents
- Email: incident@cert-in.org.in
- Helpline: 1930 (Cyber Crime Helpline)

## Offline Reporting Options

### 1. Local Police Station
- Visit the police station having jurisdiction
- Submit a written complaint (include all details of fraud)
- Request for FIR registration under relevant sections
- Obtain a copy of the FIR

### 2. Economic Offences Wing (EOW)
- For high-value financial frauds
- Present in major cities
- Submit detailed complaint with evidence
- Typically handles cases above certain financial thresholds

## Information to Include in Your Complaint

1. **Personal Details**
   - Your full name, address, contact information
   - ID proof details

2. **Incident Details**
   - Date and time of incident
   - Chronological sequence of events
   - Nature of fraud/crime
   - Amount lost (if financial fraud)

3. **Suspect Information**
   - Names (if known)
   - Phone numbers
   - Email addresses
   - Website URLs
   - Bank account details used in fraud
   - Social media profiles

4. **Evidence**
   - Screenshots
   - Transaction details
   - Communication records
   - Call recordings (if available)
   - Bank statements showing fraudulent transactions

## Legal Provisions

Cybercrimes are primarily dealt with under:

1. **Information Technology Act, 2000 (as amended in 2008)**
   - Section 43: Unauthorized access, data theft
   - Section 65: Tampering with computer source documents
   - Section 66: Computer-related offenses
   - Section 66C: Identity theft
   - Section 66D: Cheating by personation using computer
   - Section 67: Publishing obscene material

2. **Indian Penal Code (IPC)**
   - Section 420: Cheating
   - Section 468: Forgery for cheating
   - Section 471: Using forged document
   - Section 419: Cheating by personation

## Follow-up Process

1. **Track Your Complaint**
   - Use the complaint/FIR number to check status
   - Follow up regularly with investigating officer
   - Provide additional information if requested

2. **Legal Assistance**
   - Consider consulting a cybercrime specialist lawyer
   - Legal Services Authority provides free legal aid

3. **Insurance Claims**
   - Check if your bank account/credit card has fraud protection
   - File insurance claim if covered

## Prevention Tips

1. **Financial Safety**
   - Enable two-factor authentication
   - Use strong, unique passwords
   - Verify website security (https, padlock icon)
   - Never share OTPs, CVV, or PIN

2. **Digital Hygiene**
   - Be cautious of unsolicited emails/messages
   - Don't click suspicious links
   - Keep software and antivirus updated
   - Use secure networks for financial transactions

3. **Awareness**
   - Stay informed about common fraud techniques
   - Verify offers that seem too good to be true
   - Check sender email addresses carefully
   - Verify caller identity before sharing information

Remember that timely reporting increases the chances of recovering lost funds and apprehending cybercriminals. The first 24-48 hours are critical in cybercrime cases, especially financial fraud.`
  },
  {
  id: "12",
  question: "What are the legal rights and procedures for adoption in India?",
  topicId: "4",
  answer: `# Legal Rights and Procedures for Adoption in India

Adoption in India is primarily governed by the Juvenile Justice (Care and Protection of Children) Act, 2015, and the Adoption Regulations, 2022. The Central Adoption Resource Authority (CARA), a statutory body under the Ministry of Women and Child Development, regulates and monitors adoption procedures.

## Legal Framework

### Applicable Laws
1. **Juvenile Justice (Care and Protection of Children) Act, 2015**
   - Provides uniform adoption law for all citizens regardless of religion
   - Establishes procedures for declaring a child legally free for adoption
   - Sets eligibility criteria for adoptive parents

2. **Adoption Regulations, 2022**
   - Detailed procedural guidelines for adoption
   - Replaced earlier 2017 regulations
   - Streamlines the adoption process

3. **Hindu Adoption and Maintenance Act, 1956**
   - Applies to Hindus, Buddhists, Jains, and Sikhs for adoptions outside CARA
   - Limited relevance since JJ Act implementation

4. **Guardian and Wards Act, 1890**
   - Used for legal guardianship by foreigners and non-Hindus
   - Doesn't confer full adoptive rights

## Eligibility Criteria for Prospective Adoptive Parents (PAPs)

### For Indian Citizens
1. **Marital Status**
   - Married couples (minimum 2 years of stable marriage)
   - Single females
   - Single males (can only adopt boys)

2. **Age Requirements**
   - Minimum age: 25 years
   - Maximum age: 55 years for single child, 55-60 years for siblings/special needs
   - Combined age for couples should not exceed 110 years
   - Age difference between child and PAPs: minimum 25 years

3. **Financial Stability**
   - Financial capacity to provide for the child
   - No specific income requirement, but should be financially stable

4. **Health Status**
   - Physically, mentally, and emotionally stable
   - Free from life-threatening medical conditions

### For Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs)
- Same as resident Indians
- Must follow additional requirements of receiving country

### For Foreign Adoptive Parents
- Must meet eligibility criteria of their country
- Application through Authorized Foreign Adoption Agency
- Must follow Hague Convention procedures if applicable

## Adoption Process for Indian Residents

### 1. Registration
- Register on CARA's online portal (www.cara.nic.in)
- Create account and fill application form
- Upload required documents
- Pay registration fee

### 2. Home Study Report (HSR)
- Specialized Adoption Agency (SAA) conducts home study
- Assessment of PAPs' suitability
- Completed within 2 months of registration
- Valid for 3 years

### 3. Referral and Matching
- System generates referrals based on seniority
- PAPs can accept or reserve decision (up to 3 times)
- After acceptance, can visit child at agency

### 4. Pre-Adoption Foster Care
- Child placed with PAPs after acceptance
- Foster care agreement signed
- Initial adjustment period

### 5. Legal Process
- Agency files adoption petition in court
- Court hearing and verification
- Court issues adoption order

### 6. Post-Adoption Follow-up
- Periodic follow-up visits by agency
- Reports submitted to CARA
- Continues for 2 years after adoption

## Documents Required

### For Registration
1. Birth certificate/proof of date of birth
2. Marriage certificate (for couples)
3. Financial statements (income proof, tax returns)
4. Medical certificates  
5. Physical fitness certificate  
6. Proof of residence  
7. Identity proof (Aadhaar, passport, etc.)  
8. Recent photographs  
9. Criminal background clearance  

### For Court Process
1. Petition for adoption  
2. Child Study Report  
3. Medical Examination Report of the child  
4. Home Study Report  
5. Consent of biological parents (if applicable)  
6. Certificate declaring child legally free for adoption  
7. Foster care agreement  

## Special Categories of Adoption

### Relative Adoption
- Adoption of child by close relative
- Simplified process under JJ Act
- Court application with required documents
- No CARA registration required

### Step-Parent Adoption
- Adoption of spouse's child from previous marriage
- Requires consent of biological parent
- Court application under JJ Act

### Inter-Country Adoption
- Adoption by foreign citizens or NRIs/OCIs
- Processed through Central Authority of receiving country
- Follows Hague Convention procedures (if applicable)
- Stricter monitoring and follow-up requirements

## Post-Adoption Rights

### Child's Rights
1. **Legal Status**: Equal to biological child for all purposes  
2. **Inheritance Rights**: Full rights to inherit property  
3. **Maintenance**: Right to maintenance from adoptive parents  
4. **Identity**: Right to information about biological parents (at appropriate age)  

### Adoptive Parents' Rights
1. **Parental Authority**: Full parental rights and responsibilities  
2. **Privacy**: Right to privacy in adoption matters  
3. **Support Services**: Access to post-adoption counseling and support  

## Challenges and Considerations

### Legal Challenges
1. **Religious Personal Laws**: Some communities have different adoption practices  
2. **Guardianship vs. Adoption**: Different legal implications  
3. **Property Rights**: Ensuring adopted child's inheritance rights  

### Practical Considerations
1. **Waiting Period**: Can be lengthy (1-3 years for healthy infants)  
2. **Disclosure to Child**: Legal requirement to inform child about adoption  
3. **Birth Certificate**: New birth certificate issued with adoptive parents' names  
4. **Passport/Visa**: Special procedures for international adoption  

## Root Causes for Abandonment/Surrender

1. Unwed motherhood and social stigma  
2. Extreme poverty  
3. Child born with medical conditions/disabilities  
4. Family pressure  
5. Death of biological parents  

## Support Resources

1. **CARA Helpline**: 1800-11-1311  
2. **State Adoption Resource Agencies (SARAs)**: State-level monitoring  
3. **Specialized Adoption Agencies (SAAs)**: Licensed for in-country adoptions  
4. **Adoption Support Groups**: Peer support for adoptive families  
5. **Legal Aid Services**: For adoption-related legal assistance  

The adoption process in India has become more streamlined and transparent with the implementation of the JJ Act and online CARA portal. However, it still requires patience, preparation, and understanding of the legal requirements to ensure the best interests of the child are protected throughout.`,},]
export default LegalTemplateButton;
