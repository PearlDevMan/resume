
import Image from 'next/image';
import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{ item: TimelineItem }> = memo(({item}) => {
  const {title, date, location, content, trademark, imageheight, imagewidth} = item;
  return (
    <div className="flex flex-row">
      <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left" style={{width:"70%"}}>
        <div className="flex flex-col pb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
            <span>•</span>
            <span className="flex-1 text-sm sm:flex-none">{date}</span>
          </div>
        </div>
        {content}
      </div>
      <div style={{width:"30%"}}>
          <Image alt={title} height={imageheight} src={trademark} width={imagewidth} />
        </div>
    </div>
  );
});
//style={{minWidth:'none',minHeight:'none', maxWidth:'300px', maxHeight:'300px'}}
TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
