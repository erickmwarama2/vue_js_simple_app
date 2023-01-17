const Counter = {
    data() {
        return {
            count: parseInt(this.start),
            mylist: ["item1", "Item two", "Item ya tatu", "Item 4", "Item cinq"]
        }
    },
    template: `{{time()}} &nbsp; &nbsp;
    <span v-if='count<=20'>The counter is: {{count}}, double is : {{countX2}}</span>
    <span v-else> The counter has exceeded 20. It is {{count}}</span>
    <hr/>
    <ul>
    <li v-for="(item, index) in mylist" :key="index"><span>{{item}}</span></li>
    </ul>
    <hr/>
    Without v-model: <input type="text" :value="count" /> &nbsp;&nbsp; count = {{count}}<br/><br/>
    With v-model: <input type="text" v-model="count" /> &nbsp; &nbsp; count = {{count}}`,
    created() {
        setInterval(() => {
            //this.count += 1;

            if (this.count % 3 == 0) {
                //this.mylist.push("Item " + this.count);
            }
        }, 1000);
    },
    methods: {
        time() {
            var date = new Date();
            var hour = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();

            if (hour < 10) hour = "0" + hour;
            if (min < 10) min = "0" + min;
            if (sec < 10) sec = "0" + sec;

            return "" + hour + ":" + min + ":" + sec + " ";
        }
    },
    computed: {
        countX2() {
            return 2 * this.count;
        }
    },
    props: [
        "start"
    ]
}

export default Counter;