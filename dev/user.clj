(ns user
  (:require [nextjournal.clerk :as clerk]
            [nextjournal.clerk.config :as config]
            [nextjournal.clerk.viewer]))

(defn start! []
  (swap! config/!resource->url merge {"/js/viewer.js" "http://localhost:8765/js/main.js"})
  (clerk/serve!
   {:browse? true
    :watch-paths ["dev"]})
  (Thread/sleep 500)
  (clerk/show! "dev/mathlive/notebook.clj"))

(defn github-pages! [_]
  ;; TODO this now defaults to a project page. Do we want to change this?
  (swap! config/!resource->url merge {"/js/viewer.js" "/mathlive.cljs/js/main.js"})
  (clerk/build!
   {:paths ["dev/mathlive/notebook.clj"]
    :bundle? false
    :browse? false
    :out-path "public"}))

(defn publish-local!
  ([] (publish-local! nil))
  ([_]
   (swap! config/!resource->url merge {"/js/viewer.js" "/js/main.js"})
   (clerk/build!
    {:paths ["dev/mathlive/notebook.clj"]
     :bundle? false
     :browse? false
     :out-path "public"})))

(comment
  (start!)
  (clerk/serve! {:browse? true})
  (publish-local!))
