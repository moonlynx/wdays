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
                    "firstWeek": 11,
                    "lastWeek":   14
                },
 		        {
                    "description": "Анализ крови биохимический",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
                {
                    "description": "Коагулограмма",
                    "firstWeek": 11,
                    "lastWeek":  14
                },
                {
                    "description": "Определение антител классов М и G  к вирусу краснухи в крови, антител к токсоплазме в крови",
                    "firstWeek": 11,
                    "lastWeek":  14
                },
		        {
                    "description": "Общий анализ мочи",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
		        {
                    "description": "Плазменный протеин А(PAPP-A) и бета-ХГ",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
		        {
                    "description": "RW, HBsAg, НCV, Ф-50",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
		        {
                    "description": "Мазок на флору",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
		        {
                    "description": "ЭКГ",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
		        {
                    "description": "УЗИ малого таза",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
                {
                    "description": "Мазок на онкоцитологию",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
                {
                    "description": "Осмотр и консультация оториноларинголога",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
                {
                    "description": "Осмотр и консультация офтальмолога",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
                {
                    "description": "Осмотр и консультация акушера-гинеколога",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
                {
                    "description": "Осмотр и консультация стоматолога",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
                {
                    "description": "Осмотр и консультация терапевтом",
                    "firstWeek": 11,
                    "lastWeek": 14
                },
                {
                    "description": "Консультация психолога",
                    "firstWeek": 11,
                    "lastWeek": 14
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
                    "description": "Общий клинический анализ крови развернутый",
                    "firstWeek": 18,
                    "lastWeek":  21
                },
                {
                    "description": "Общий анализ мочи",
                    "firstWeek": 18,
                    "lastWeek":  21
                },
                {
                    "description": "Посев средней порции мочи на флору и чувствительность к антибиотикам после 14 недель",
                    "firstWeek": 18,
                    "lastWeek":  21
                },
                {
                    "description": "ОГТП с 75 г. Глюкозы",
                    "firstWeek": 24,
                    "lastWeek":  28
                },
                {
                    "description": "УЗИ малого таза",
                    "firstWeek": 18,
                    "lastWeek":  21
                },
                {
                    "description": "Осмотр и консультация акушера-гинеколога",
                    "firstWeek": 18,
                    "lastWeek":  21
                },
                {
                    "description": "Консультация психолога",
                    "firstWeek": 18,
                    "lastWeek":  21
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
                    "description": "Общий клинический анализ крови развернутый",
                    "firstWeek": 30,
                    "lastWeek":  34
                },
                {
                    "description": "Анализ крови биохимический",
                    "firstWeek": 30,
                    "lastWeek":  34
                },
                {
                    "description": "Коагулограмма",
                    "firstWeek": 30,
                    "lastWeek":  34
                },
                {
                    "description": "Определение антител классов М и G  к вирусу краснухи в крови, антител к токсоплазме в крови",
                    "firstWeek": 30,
                    "lastWeek":  34
                },
                {
                    "description": "Общий анализ мочи",
                    "firstWeek": 30,
                    "lastWeek":  34
                },
                {
                    "description": "RW, HBsAg, НCV, Ф-50",
                    "firstWeek": 30,
                    "lastWeek":  34
                },
                {
                    "description": "Мазок на флору",
                    "firstWeek": 30,
                    "lastWeek":  34
                },
                {
                    "description": "УЗИ малого таза",
                    "firstWeek": 30,
                    "lastWeek":  34
                },
                {
                    "description": "Кардиотокография после 33 недель беременности",
                    "firstWeek": 33,
                    "lastWeek":  34
                },
                {
                    "description": "Осмотр и консультация акушера-гинеколога",
                    "firstWeek": 30,
                    "lastWeek":  34
                },
                {
                    "description": "Осмотр и консультация терапевтом",
                    "firstWeek": 30,
                    "lastWeek":  34
                },
                {
                    "description": "Консультация психолога",
                    "firstWeek": 30,
                    "lastWeek":  34
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