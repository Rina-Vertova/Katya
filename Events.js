const eventsByDay = {
            1: [ // Понедельник
                
                { time: new Date().setHours(10, 30), label: 'Разговоры', type: 'type2', duration: 45 * 60 * 1000},
                { time: new Date().setHours(11, 30), label: 'Английский', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(12, 25), label: 'Алгебра', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(13, 20), label: 'Литература', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(14, 00), type: 'type4', duration: 15 * 60 * 1000},
                { time: new Date().setHours(14, 15), label: 'Осетинский', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(15, 05), label: 'География', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(15, 50), label: 'Вероятность', type: 'type2', duration: 40 * 60 * 1000},

                { time: new Date().setHours(10, 30), label: 'Разговоры', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(11, 25), label: 'Биология', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(12, 30), label: 'Английский', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(13, 35), label: 'Английский', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(14, 30), label: 'Алгебра', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(15, 25), label: 'Обществознание', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(16, 30), label: 'Русский', type: 'type5', duration: 45 * 60 * 1000}
            ],
            2: [ // Вторник

                { time: new Date().setHours(10, 30), label: 'Физика', type: 'type2', duration: 45 * 60 * 1000},
                { time: new Date().setHours(11, 30), label: 'Осетинский', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(12, 25), label: 'Геометрия', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(13, 20), label: 'Химия', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(14, 00), type: 'type4', duration: 15 * 60 * 1000},
                { time: new Date().setHours(14, 15), label: 'Литература', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(15, 05), label: 'История', type: 'type2', duration: 40 * 60 * 1000},
        
                { time: new Date().setHours(10, 30), label: 'Физика', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(11, 25), label: 'Физ-ра', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(12, 30), label: 'Геометрия', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(13, 35), label: 'Информатика', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(14, 30), label: 'Алгебра', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(15, 25), label: 'Химия', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(16, 30), label: 'История', type: 'type5', duration: 45 * 60 * 1000}
            ],
            3: [ // Среда

                { time: new Date().setHours(10, 30), label: 'Обществознание', type: 'type2', duration: 45 * 60 * 1000},
                { time: new Date().setHours(11, 30), label: 'Биология', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(12, 25), label: 'Алгебра', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(13, 20), label: 'Обществознание', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(14, 00), type: 'type4', duration: 15 * 60 * 1000},
                { time: new Date().setHours(14, 15), label: 'Русский', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(15, 05), label: 'Физика', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(15, 50), label: 'Допы общество', type: 'type2', duration: 40 * 60 * 1000},

                { time: new Date().setHours(10, 30), label: 'Алгебра', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(11, 25), label: 'Обществознание', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(12, 30), label: 'Английский', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(13, 35), label: 'Английский', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(14, 30), label: 'Вероятность', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(15, 25), label: 'История', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(16, 30), label: 'Литература', type: 'type5', duration: 45 * 60 * 1000}
            ],
            4: [ // Четверг

                { time: new Date().setHours(10, 30), label: 'Английский', type: 'type2', duration: 45 * 60 * 1000},
                { time: new Date().setHours(11, 30), label: 'Русский', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(12, 25), label: 'Алгебра', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(13, 20), label: 'Геометрия', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(14, 00), type: 'type4', duration: 15 * 60 * 1000},
                { time: new Date().setHours(14, 15), label: 'Русский', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(15, 05), label: 'Обществознание', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(15, 50), label: 'Химия', type: 'type2', duration: 40 * 60 * 1000},

                { time: new Date().setHours(10, 30), label: 'Физика', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(11, 25), label: 'Английский', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(12, 30), label: 'Английский', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(13, 35), label: 'Алгебра', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(14, 30), label: 'Русский', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(15, 25), label: 'Русский', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(16, 30), label: 'Обществознание', type: 'type5', duration: 45 * 60 * 1000}
            ],
            5: [ // Пятница

                { time: new Date().setHours(10, 30), label: 'Литература', type: 'type2', duration: 45 * 60 * 1000},
                { time: new Date().setHours(11, 30), label: 'ОБЗР', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(12, 25), label: 'Физика', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(13, 20), label: 'Обществознание', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(14, 00), type: 'type4', duration: 15 * 60 * 1000},
                { time: new Date().setHours(14, 15), label: 'Английский', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(15, 05), label: 'Осетинский', type: 'type2', duration: 40 * 60 * 1000},
                { time: new Date().setHours(15, 50), label: 'История', type: 'type2', duration: 40 * 60 * 1000},

                { time: new Date().setHours(10, 30), label: 'Обществознание', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(11, 25), label: 'Геометрия', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(12, 30), label: 'Геометрия', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(13, 35), label: 'География', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(14, 30), label: 'Экономика', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(15, 25), label: 'Литерартура', type: 'type5', duration: 45 * 60 * 1000},
                { time: new Date().setHours(16, 30), label: 'ОБЗР', type: 'type5', duration: 45 * 60 * 1000}
            ],
            6: [ // Суббота
                
            ],
            0: [ // Воскресенье
                
            ]
        };
const but = new Buttons();
const timeline = new TimeLine();
      timeline.createTimeMarkers();
      window.onresize = () => {
        timeline.createTimeMarkers();
        but.displayEvents();
      };
      timeline.createRedLine();
      setInterval(() => {
       timeline.createRedLine();
      }, 1000);
but.displayEvents();
but.scrollToRedLine();
but.setTextBoldAndUnderlined();
but.init();
