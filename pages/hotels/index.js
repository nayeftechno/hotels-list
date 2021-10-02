import { useContext } from "react";
import GetMeta from "../../src/components/GetMeta";
import { HotelsContext } from "../../src/contexts/HotelsContexts";
import AppDatePicker from "../../src/components/AppDatePicker";
import LoadingGif from "../../src/components/LoadingGif";
import SearchResultList from "../../src/components/SearchResultList";
function Hotels() {
  const {
    loading,
    isSearchTriggered,
    hotels,
    error,
    searchHotelsBasedDates,
    startDate,
    editStartDate,
    endDate,
    editEndDate,
  } = useContext(HotelsContext);
  return (
    <>
      <GetMeta title="List" />
      {renderSearchContent()}
      {renderSearchResult()}
    </>
  );
  function renderSearchContent() {
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <AppDatePicker
              currentDate={startDate}
              onDateChange={editStartDate}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <AppDatePicker currentDate={endDate} onDateChange={editEndDate} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <button className="btn btn-info" onClick={searchHotelsBasedDates}>
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
  function renderSearchResult() {
    return (
      <div className="row">
        {loading ? (
          renderLoading()
        ) : (
          <div className="col-md-12">
            {hotels.length ? renderSearchList() : renderEmptyListOrError()}
          </div>
        )}
      </div>
    );
  }
  function renderLoading() {
    return (
      <div className="col-md-12 text-center loading-gif-margin">
        <LoadingGif />
      </div>
    );
  }
  function renderSearchList() {
    return <SearchResultList hotels={hotels} />;
  }
  function renderEmptyListOrError() {
    return (
      <>
        {isSearchTriggered && !error ? (
          <h5>No Hotels Found</h5>
        ) : (
          <h5>{error}</h5>
        )}
      </>
    );
  }
}
export default Hotels;
