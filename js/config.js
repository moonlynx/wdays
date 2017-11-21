function DDays() {
    return {
        "dekret": {
            "description": "Декрет:",
            "week": 30
        },
        "pdr": {
            "description": "Предположительная дата родов:"
        },
        "regDate": {
            "description": "Дата постановки на учет:"
        },
        "tubDisp": {
            "description": "Дата сверки с тубдиспансером:"
        },
    }
}

function Periods() {
    return [
        {
            "prefix": "ft",
            "description": "Первый триместр",
            "firstWeek": 1,
            "lastWeek":  13,
            "events": [
                {
                    "description": "Общий клинический анализ крови развернутый",
                    "firstWeek": 8,
                    "lastWeek":   10
                },
 		        {
                    "description": "Консультация смежных специалистов",
                    "firstWeek": 8,
                    "lastWeek": 10
                },
                {
                    "description": "Посевы (зев, нос, ц.канал)",
                    "firstWeek": 8,
                    "lastWeek":  10
                },
                {
                    "description": "Скрининг I триместра + кровь на PAPP",
                    "firstWeek": 12,
                    "lastWeek":  12
                },
                /*
                {
                    "description": "<описание>",
                    "firstWeek": <целое число>,
                    "lastWeek": <целое число>
                },
                */
            ]
        },
        {
            "prefix": "st",
            "description": "Второй триместр",
            "firstWeek": 14,
            "lastWeek":  27,
            "events": [
                {
                    "description": "Посев мочи",
                    "firstWeek": 14,
                    "lastWeek":  14
                },
                {
                    "description": "Кровь на АФП, RW, Ф-50",
                    "firstWeek": 16,
                    "lastWeek":  16
                },
                {
                    "description": "Скрининг II триместра",
                    "firstWeek": 20,
                    "lastWeek": 20
                },
                /*
                {
                    "description": "<описание>",
                    "firstWeek": <целое число>,
                    "lastWeek": <целое число>
                },
                */
            ]
        },
        {
            "prefix": "tt",
            "description": "Третий триместр",
            "firstWeek": 28,
            "lastWeek":  43,
            "events": [
                {
                    "description": "Скрининг III триместра",
                    "firstWeek": 32,
                    "lastWeek":  32
                },
                {
                    "description": "Общий клинический анализ крови развернутый",
                    "firstWeek": 36,
                    "lastWeek":  36
                },                
                {
                    "description": "КТГ",
                    "firstWeek": 38,
                    "lastWeek":  38
                },
                {
                    "description": "КТГ",
                    "firstWeek": 39,
                    "lastWeek":  39
                },
                {
                    "description": "КТГ",
                    "firstWeek": 40,
                    "lastWeek":  40
                },
                /*
                {
                    "description": "<описание>",
                    "firstWeek": <целое число>,
                    "lastWeek": <целое число>
                },
                */
            ]
        },      
    ]
}