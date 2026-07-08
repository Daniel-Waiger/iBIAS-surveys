function createIBIASForm() {
  // Create a new form
  var form = FormApp.create('iBIAS 2026 Core Facility Community Survey: Shape the Coming Year');
  form.setDescription("The Israeli Bio-Image Analysis Society (iBIAS) is planning next year's activities for core facilities. Your feedback will directly shape workshops, training content, and community events. Please complete this short survey (about 3-5 minutes).");
  
  // Validation objects
  var textVal300 = FormApp.createTextValidation()
    .requireTextLengthLessThanOrEqualTo(300)
    .build();
    
  var emailVal = FormApp.createTextValidation()
    .requireTextIsEmail()
    .build();

  // Section 1
  form.addPageBreakItem().setTitle('Section 1: Facility Focus');

  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('What is your main focus area in your core facility?')
    .setChoiceValues([
      'Microscopy support and imaging pipelines',
      'Quantitative image analysis support',
      'Training and user onboarding',
      'AI and deep learning analysis support',
      'Data management and reproducibility',
      'Workflow design and automation'
    ])
    .showOtherOption(true)
    .setRequired(true);

  var q2 = form.addCheckboxItem();
  q2.setTitle('Which tools are most relevant to your facility work right now?')
    .setChoiceValues([
      'FIJI and ImageJ',
      'Python (napari, scikit-image, etc.)',
      'CellProfiler',
      'QuPath',
      'Cellpose',
      'ilastik',
      'Commercial tools (Imaris, Arivis, etc.)'
    ])
    .showOtherOption(true)
    .setRequired(true);

  // Section 2
  form.addPageBreakItem().setTitle('Section 2: Content Priorities');

  var q3 = form.addCheckboxItem();
  q3.setTitle('Which topics should iBIAS prioritize this year?')
    .setChoiceValues([
      'Deep learning and machine learning for microscopy',
      'Segmentation best practices (including Cellpose and ilastik workflows)',
      'Spatial biology image analysis',
      'Big data handling and cloud or HPC workflows',
      'Reproducible analysis pipelines',
      'Enhanced workflow design and reporting with LLMs',
      'Advanced tool-specific tutorials'
    ])
    .showOtherOption(true)
    .setRequired(true);

  var q4 = form.addTextItem();
  q4.setTitle('What is the single biggest analysis bottleneck in your facility today?')
    .setHelpText('Take a moment to think before answering. What challenge, if solved, would create the biggest impact for your users?')
    .setRequired(true)
    .setValidation(textVal300);

  // Section 3
  form.addPageBreakItem().setTitle('Section 3: Activities and Participation');

  var q5 = form.addGridItem();
  q5.setTitle('What activities are you most likely to attend?')
    .setRows([
      'Hands-on workshops (half day or full day)',
      'Short virtual seminars (about 1 hour)',
      'In-person community and networking events',
      'Bring-your-own-data problem-solving sessions',
      'Method-focused journal clubs'
    ])
    .setColumns([
      'Very likely',
      'Somewhat likely',
      'Unlikely'
    ])
    .setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('How do you prefer to participate?')
    .setChoiceValues([
      'Fully virtual',
      'Mostly virtual, occasional in-person',
      'Mostly in-person'
    ])
    .setRequired(true);

  var q7 = form.addCheckboxItem();
  q7.setTitle('Would you be interested in contributing this year?')
    .setChoiceValues([
      'I can give a short talk or webinar',
      'I can help teach or assist in a workshop',
      'I can host a local meetup at my institute',
      'Not at this time'
    ])
    .setRequired(true);

  // Section 4
  form.addPageBreakItem().setTitle('Section 4: Final Input');

  var q8 = form.addTextItem();
  q8.setTitle('Any additional suggestions for iBIAS activities or content?')
    .setRequired(true)
    .setValidation(textVal300);

  var q9 = form.addTextItem();
  q9.setTitle('If you want follow-up from the iBIAS team, leave your email here.')
    .setRequired(false)
    .setValidation(emailVal);

  // Log the URLs to easily access the form
  Logger.log('Survey generated successfully!');
  Logger.log('Edit URL (for you to preview and modify): ' + form.getEditUrl());
  Logger.log('Published URL (to send to participants): ' + form.getPublishedUrl());
}function createIBIASForm() {
  // Create a new form
  var form = FormApp.create('iBIAS 2026 Core Facility Community Survey: Shape the Coming Year');
  form.setDescription("The Israeli Bio-Image Analysis Society (iBIAS) is planning next year's activities for core facilities. Your feedback will directly shape workshops, training content, and community events. Please complete this short survey (about 3-5 minutes).");
  
  // Validation objects
  var textVal300 = FormApp.createTextValidation()
    .requireTextLengthLessThanOrEqualTo(300)
    .build();
    
  var emailVal = FormApp.createTextValidation()
    .requireTextIsEmail()
    // Apps Script doesn't support chaining two different text validations natively (email AND length), 
    // so we'll use regex for an email up to 300 chars or just the email validation.
    // For simplicity and proper UI error messages, requireTextIsEmail is best here.
    .build();

  // Section 1
  form.addPageBreakItem().setTitle('Section 1: Facility Focus');

  var q1 = form.addMultipleChoiceItem();
  q1.setTitle('What is your main focus area in your core facility?')
    .setChoiceValues([
      'Microscopy support and imaging pipelines',
      'Quantitative image analysis support',
      'Training and user onboarding',
      'AI and deep learning analysis support',
      'Data management and reproducibility',
      'Workflow design and automation'
    ])
    .showOtherOption(true)
    .setRequired(true);

  var q2 = form.addCheckboxItem();
  q2.setTitle('Which tools are most relevant to your facility work right now?')
    .setChoiceValues([
      'FIJI and ImageJ',
      'Python (napari, scikit-image, etc.)',
      'CellProfiler',
      'QuPath',
      'Cellpose',
      'ilastik',
      'Commercial tools (Imaris, Arivis, etc.)'
    ])
    .showOtherOption(true)
    .setRequired(true);

  // Section 2
  form.addPageBreakItem().setTitle('Section 2: Content Priorities');

  var q3 = form.addCheckboxItem();
  q3.setTitle('Which topics should iBIAS prioritize this year?')
    .setChoiceValues([
      'Deep learning and machine learning for microscopy',
      'Segmentation best practices (including Cellpose and ilastik workflows)',
      'Spatial biology image analysis',
      'Big data handling and cloud or HPC workflows',
      'Reproducible analysis pipelines',
      'Enhanced workflow design and reporting with LLMs',
      'Advanced tool-specific tutorials'
    ])
    .showOtherOption(true)
    .setRequired(true);

  var q4 = form.addTextItem();
  q4.setTitle('What is the single biggest analysis bottleneck in your facility today?')
    .setHelpText('Take a moment to think before answering. What challenge, if solved, would create the biggest impact for your users?')
    .setRequired(true)
    .setValidation(textVal300);

  // Section 3
  form.addPageBreakItem().setTitle('Section 3: Activities and Participation');

  var q5 = form.addGridItem();
  q5.setTitle('What activities are you most likely to attend?')
    .setRows([
      'Hands-on workshops (half day or full day)',
      'Short virtual seminars (about 1 hour)',
      'In-person community and networking events',
      'Bring-your-own-data problem-solving sessions',
      'Method-focused journal clubs'
    ])
    .setColumns([
      'Very likely',
      'Somewhat likely',
      'Unlikely'
    ])
    .setRequired(true);

  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('How do you prefer to participate?')
    .setChoiceValues([
      'Fully virtual',
      'Mostly virtual, occasional in-person',
      'Mostly in-person'
    ])
    .setRequired(true);

  var q7 = form.addCheckboxItem();
  q7.setTitle('Would you be interested in contributing this year?')
    .setChoiceValues([
      'I can give a short talk or webinar',
      'I can help teach or assist in a workshop',
      'I can host a local meetup at my institute',
      'Not at this time'
    ])
    .setRequired(true);

  // Section 4
  form.addPageBreakItem().setTitle('Section 4: Final Input');

  var q8 = form.addTextItem();
  q8.setTitle('Any additional suggestions for iBIAS activities or content?')
    .setRequired(true)
    .setValidation(textVal300);

  var q9 = form.addTextItem();
  q9.setTitle('If you want follow-up from the iBIAS team, leave your email here.')
    .setRequired(false)
    .setValidation(emailVal);

  // Log the URLs to easily access the form
  Logger.log('Survey generated successfully!');
  Logger.log('Edit URL (for you to preview and modify): ' + form.getEditUrl());
  Logger.log('Published URL (to send to participants): ' + form.getPublishedUrl());
}