module.exports = [
    {
      type: 'category',
      link: {
        type: 'doc',
        id: '',
      },
      label: 'Nova Bank',
      items: [
        {
          type: 'doc',
          label: 'Часто задаваемые вопросы',
          id: 'faq', 
        },
        {
          type: 'doc',
          label: 'Контактная информация',
          id: 'contact-us', 
        },
        {
          type: 'category',
          label: 'Регистрация и вход',
          collapsible: false,
          collapsed: false,
          customProps: {
            type: 'section-divider',
            divider: true,
          },
          items: [
            {
              type: 'doc',
              label: 'Регистрация в Nova Bank',
              id: 'registration/sign-up', 
            },
            {
              type: 'doc',
              label: 'Как изменить пароль в Nova Bank',
              id: 'registration/change-password', 
            },
          ],
        },
        {
          type: 'category',
          label: 'Работа с приложением',
          collapsible: false,
          collapsed: false,
          customProps: {
            type: 'section-divider',
            divider: true,
          },
          items: [
            {
              type: 'doc',
              id: 'settings/app-install',
              label: 'Как установить Nova Bank',
            },
            {
              type: 'doc',
              id: 'settings/notification',
              label: 'Уведомления в Nova Bank',
            },
            {
              type: 'doc',
              id: 'settings/update-app',
              label: 'Обновление Nova Bank',
            },
          ],
        },
        {
          type: 'category',
          label: 'Платежи и переводы',
          collapsible: false,
          collapsed: false,
          customProps: {
            type: 'section-divider',
            divider: true,
          },
          items: [
            {
              type: 'doc',
              label: 'Просмотр баланса и транзакций',
              id: 'payments/balance', 
            },
            {
              type: 'doc',
              label: 'Как перевести деньги по номеру карты',
              id: 'payments/transfers',
            },
          ],
        },
      ],
    },
  ];