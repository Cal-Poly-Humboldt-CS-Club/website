createCard(
  {
      title: 'Why CS Club?',
      iconClass: 'ri-question-line',
      content: 'The <b>Computer Science Club</b> offers a supportive space for students to collaborate, learn new skills, and explore tech careers, welcoming anyone interested in the diverse world of technology.',
      actions: []
  }
);

createCard(
  {
      title: 'Current Events',
      iconClass: 'ri-calendar-line',
      content: '<ul><li><b>Club Meetings</b> - Thursdays, 6-7:30 PM <span class="li-span left" onclick="window.location.href = \"activities/index.html\"">More Info</span></li></ul>',
      actions: [
          {
              label: 'Club Activities <i style="margin-left:5px" class="ri-external-link-fill"></i>',
              href: 'activities/index.html'
          }
      ]
  }
);

createCard(
    {
    title: 'Explore our Merch',
    iconClass: 'ri-store-2-line',
    content: '<b>New designs!</b> Show your support and represent your club.',
    actions: [
            {
                label: 'Online store <i style="margin-left:5px" class="ri-external-link-fill"></i>',
                href: 'https://commerce.cashnet.com/HUM-RSO?CNAME=CL113+MERCH'
            }
        ]
    }
);