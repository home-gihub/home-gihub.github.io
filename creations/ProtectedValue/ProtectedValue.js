export class ProtectedValue {
            #Val
            #Subscribers

            constructor(initialValue) {
                this.#Subscribers = []
                this.#Val = initialValue
            }

            subscribe(func)
                { this.#Subscribers.push(func) }

            set val(v) {
                this.#Val = v
                for (let i=0;i<this.#Subscribers.length;i++) {
                    this.#Subscribers[i](this.#Val)
                }
            }

            get val()
                { return this.#Val }

            unsubscribe(func)
                {
                    this.#Subscribers = this.#Subscribers.filter
                    ((item) => { return item !== func })
                }
            
            destroy() {
                this.#Subscribers = null
                this.#Val = null
            }
        }
