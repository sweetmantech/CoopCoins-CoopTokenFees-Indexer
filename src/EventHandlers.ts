/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { CoopCoin, CoopCoin_CoopTokenFees } from "generated";

CoopCoin.CoopTokenFees.handler(
  async ({ event, context }) => {
    const coopCoinId = `${event.chainId}_${event.block.number}_${event.logIndex}`;
    const coopCoinEntity: CoopCoin_CoopTokenFees = {
      id: coopCoinId,
      tokenCreator: event.params.tokenCreator,
      platformReferrer: event.params.platformReferrer,
      orderReferrer: event.params.orderReferrer,
      protocolFeeRecipient: event.params.protocolFeeRecipient,
      tokenCreatorFee: event.params.tokenCreatorFee,
      platformReferrerFee: event.params.platformReferrerFee,
      orderReferrerFee: event.params.orderReferrerFee,
      protocolFee: event.params.protocolFee,
      contract: event.srcAddress,
    };
    context.CoopCoin_CoopTokenFees.set(coopCoinEntity);
  },
  { wildcard: true }
);
