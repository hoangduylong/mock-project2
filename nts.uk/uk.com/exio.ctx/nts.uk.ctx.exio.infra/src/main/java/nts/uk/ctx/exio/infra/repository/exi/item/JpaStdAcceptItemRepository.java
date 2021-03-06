package nts.uk.ctx.exio.infra.repository.exi.item;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.ejb.Stateless;

import nts.arc.layer.infra.data.JpaRepository;
import nts.uk.ctx.exio.dom.exi.item.StdAcceptItem;
import nts.uk.ctx.exio.dom.exi.item.StdAcceptItemRepository;
import nts.uk.ctx.exio.infra.entity.exi.item.OiomtExAcItem;
import nts.uk.ctx.exio.infra.entity.exi.item.OiomtStdAcceptItemPk;

@Stateless
public class JpaStdAcceptItemRepository extends JpaRepository implements StdAcceptItemRepository {

	private static final String SELECT_ALL = "SELECT f FROM OiomtExAcItem f "
			+ "WHERE f.stdAcceptItemPk.cid = :cid "
			+ "AND f.stdAcceptItemPk.conditionSetCd = :conditionSetCd "
			+ "ORDER BY f.stdAcceptItemPk.acceptItemNumber";

	@Override
	public Optional<StdAcceptItem> getStdAcceptItemById(String cid, String conditionSetCd,
			int acceptItemNumber) {
		Optional<OiomtExAcItem> entity = this.queryProxy().find(
				new OiomtStdAcceptItemPk(cid, conditionSetCd, acceptItemNumber), OiomtExAcItem.class);
		if (entity.isPresent()) {
			return Optional.of(OiomtExAcItem.toDomain(entity.get()));
		} else {
			return Optional.empty();
		}
	}

	@Override
	public void add(StdAcceptItem domain) {
		this.commandProxy().insert(OiomtExAcItem.toEntity(domain));
	}

	@Override
	public void update(StdAcceptItem domain) {
		Optional<OiomtExAcItem> entityOpt = this
				.queryProxy().find(
						new OiomtStdAcceptItemPk(domain.getCid(), 
								domain.getConditionSetCd().v(), domain.getAcceptItemNumber()),
						OiomtExAcItem.class);
		if (entityOpt.isPresent()) {
			OiomtExAcItem entity = entityOpt.get();
			this.commandProxy().update(entity);
		}
	}

	@Override
	public void remove(String cid, String conditionSetCd, int acceptItemNumber) {
		this.commandProxy().remove(OiomtExAcItem.class,
				new OiomtStdAcceptItemPk(cid, conditionSetCd, acceptItemNumber));
	}

	@Override
	public void removeAll(String cid, String conditionSetCd) {
		List<OiomtExAcItem> listEntity = this.queryProxy().query(SELECT_ALL, OiomtExAcItem.class)
				.setParameter("cid", cid)
				.setParameter("conditionSetCd", conditionSetCd).getList();
		this.commandProxy().removeAll(listEntity);
		this.getEntityManager().flush();
	}

	@Override
	public List<StdAcceptItem> getListStdAcceptItems(String cid,String conditionSetCd) {
		return this.queryProxy().query(SELECT_ALL, OiomtExAcItem.class)
				.setParameter("cid", cid)
				.setParameter("conditionSetCd", conditionSetCd)
				.getList(c -> OiomtExAcItem.toDomain(c));
	}

	@Override
	public void addList(List<StdAcceptItem> listItem) {
		this.commandProxy().insertAll(
				listItem.stream().map(item -> OiomtExAcItem.toEntity(item)).collect(Collectors.toList()));
	}

}
