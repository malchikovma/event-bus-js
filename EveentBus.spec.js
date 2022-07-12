import EventBus from "./EventBus";

describe("EventBus", () => {
    let bus;

    beforeEach(() => {
        bus = new EventBus();
    })

    it("not dispatches without events", () => {
        expect(() => {
            bus.dispatch('any')
        }).not.toThrow()
    });

    it('dispatches event', () => {
        let test = false;
        const eventName = 'eventName';
        bus.addEventListener(eventName, () => {
            test = true
        })

        bus.dispatch(eventName);

        expect(test).toBeTruthy();
    })

    it('dispatches multiple events', () => {
        let test1 = false;
        let test2 = false;
        const eventName1 = 'eventName1';
        const eventName2 = 'eventName2';
        bus.addEventListener(eventName1, () => {test1 = true});
        bus.addEventListener(eventName2, () => {test2 = true});

        bus.dispatch(eventName1);
        bus.dispatch(eventName2);

        expect(test1).toBeTruthy();
        expect(test2).toBeTruthy();
    })

    it('multiple listeners executed', () => {
        let test1 = false;
        let test2 = false;
        const eventName = 'eventName1';
        bus.addEventListener(eventName, () => {test1 = true});
        bus.addEventListener(eventName, () => {test2 = true});

        bus.dispatch(eventName);

        expect(test1).toBeTruthy();
        expect(test2).toBeTruthy();
    })
});
