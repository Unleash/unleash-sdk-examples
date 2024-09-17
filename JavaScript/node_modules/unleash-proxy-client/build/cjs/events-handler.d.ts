import { IContext } from '.';
declare class EventsHandler {
    private generateEventId;
    createImpressionEvent(context: IContext, enabled: boolean, featureName: string, eventType: string, impressionData?: boolean, variant?: string): {
        eventType: string;
        eventId: string;
        context: IContext;
        enabled: boolean;
        featureName: string;
        impressionData: boolean | undefined;
    } | {
        variant: string;
        eventType: string;
        eventId: string;
        context: IContext;
        enabled: boolean;
        featureName: string;
        impressionData: boolean | undefined;
    };
    private createBaseEvent;
}
export default EventsHandler;
//# sourceMappingURL=events-handler.d.ts.map