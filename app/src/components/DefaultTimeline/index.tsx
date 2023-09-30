import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";
   
export function DefaultTimeline():JSX.Element {
    return (
      <div className="pe-10">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-green-700" />
              <Typography variant="h6" className="font-content">
                Premium Ingredients: 
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small"  className="font-content text-gray-600">
                We start with the finest, carefully selected ingredients, ensuring top-notch quality and flavor.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-green-700" />
              <Typography variant="h6" className="font-content">
                Meticulous Preparation:
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small"  className="font-content text-gray-600">
                Our chefs follow precise techniques and procedures to create each dish, guaranteeing consistency and excellence in taste.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-green-700" />
              <Typography variant="h6" className="font-content">
                Crafted Perfection: 
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography variant="small"  className="font-content text-gray-600">
                Every plate undergoes rigorous quality checks and finishing touches before it reaches your table, delivering a culinary experience that's second to none.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
}