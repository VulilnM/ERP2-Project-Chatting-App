import React from "react";
import { Channel, MessageTeam, useChatContext } from "stream-chat-react";

import { ChannelInner, CreateChannel, EditChannel } from "./";

const ChannelContainer = ({
  isCreating,
  setIsCreating,
  isEditing,
  setIsEditing,
  createType,
}) => {
  //gives us information about curr specific channel
  const { channel } = useChatContext();

  if (isCreating) {
    return (
      <div className="channel_container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }
  if (isEditing) {
    return (
      <div className="channel_container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    );
  }

  const EmptyState = () => {
    <div className="channel-empty__container">
      <p className="channel-empty__first">
        This is the beginning of your chat history.
      </p>
      <p className="channel-empty__second">
        Send messages, attachment, links, emojis and more!
      </p>
    </div>;
  };

  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <MessageTeam key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  );
};

export default ChannelContainer;
